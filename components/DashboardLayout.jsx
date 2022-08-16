import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ThreeCircles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actionAsync/profile';
import FooterDashboard from './FooterDashboard';
import NavbarDashboard from './NavbarDashboard';
import SideBarMenu from './SideBarMenu';

function DashboardLayout(props) {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const token = Cookies.get('token')
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useSelector((state)=> state.auth.results);
  React.useEffect(() => {
    if (token) {
      // dispatch(getProfile(user.id ));
      dispatch(getProfile(user.id));
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      // dispatch(historyTransaction(data))
    } else {
      router.push('/login')
    }
  }, [dispatch, user, token, router, isLoading]);

  return (
    <>
      {isLoading == true ? <div className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center gap-5">
        <div className="h3 font-bold">WAIT FOR A MINUTE</div>
        <ThreeCircles height="100" width="100" color="#4fa94d" visible={true} />
      </div> : <>
        {/* HEADER NAVBAR */}
        <NavbarDashboard titlePage='OPo - Dashboard' />
        {/* SIDEBAR content-layout */}
        <Container as='section' className='g-0'>
          <Row className='d-flex pt-5 gx-0 gx-sm-3'>
            <SideBarMenu />
            <Col
              sm={12}
              lg={9}
              className='d-flex flex-column justify-content-between gap-4'
            >
              {props.children}
            </Col>
          </Row>
        </Container>
        <FooterDashboard />
      </>}

    </>
  );
}

export default DashboardLayout;