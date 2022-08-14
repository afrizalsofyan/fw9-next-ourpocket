import React from 'react';
import NavbarDashboard from '../../../components/NavbarDashboard';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';
import SideBarMenu from '../../../components/SideBarMenu';
import FooterDashboard from '../../../components/FooterDashboard';
import ContentLayout from '../../../components/ContentLayout';
import { UserCard } from '../../../components/UserCard';

// import Img1 from '../../assets/images/img/img1.png';
// import Img2 from '../../assets/images/img/img2.png';
// import Img3 from '../../assets/images/img/img3.png';
// import Img4 from '../../assets/images/img/img4.png';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUser } from '../../redux/actionAsync/user';

function Transfer() {
  const users = useSelector((state)=> state.user.result);
  const token = useSelector((state)=> state.auth.token);
  const dispatch = useDispatch();

  // React.useEffect(()=>{
  //   dispatch(getAllUser(token));
  // }, [dispatch, token]);
  // console.log(users);
  return (
    <>
      <NavbarDashboard titlePage='OPo - transfer'/>
      <Container as='section' className='g-0 '>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fw-bold fs-5 color-text-2'>Search Receiver</span>
                </div>
                <InputGroup className='search-input my-4 '>
                  <span className='icon-input'>
                    <FiSearch size={24}/>
                  </span>
                  <Form.Control type='text' className='ps-5 border-0 bg-grey-input rounded-3 py-3 color-text-6' placeholder='Search receiver here'/>
                </InputGroup>
                {/* img_path={Img1} */}
                <div className='d-flex flex-column gap-5 py-4'>
                  {users && users.map((el)=>{
                    return(
                      <div key={el.id}>
                        <UserCard
                          url={`/home/transfer/${el.id}`}
                          img_path={Img1}
                          name={`${el.first_name} ${el.last_name}`}
                          phone={'+62 811-3452-5252'}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default Transfer;
