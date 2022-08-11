import React from 'react';
import Container from 'react-bootstrap/Container';
// import UserPhoto from '../assets/images/img/img3.png';
import { FaRegUser } from 'react-icons/fa';
import { FiBell, FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { Navbar,  Nav, Alert, DropdownButton, Image } from 'react-bootstrap';
import {
  NotificationCardHeader,
  NotificationCardItem,
} from './NotificationCard';
import { MenuNavbar } from './SideBarMenu';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// import { getProfile } from '../redux/actionAsync/profile';
import Head from 'next/head';


function NavbarDashboard({ titlePage }) {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  // const profile = useSelector((state)=> state.profile.result);
  // const location = useLocation();
  // const [visible, setVisible] = React.useState(false);

  //willmount just render when first load
  // React.useEffect(() => {
  //   dispatch(getProfile(token));
  //   setVisible(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //   }, 1500);
  // }, [dispatch, token]);
  //data profile
  // const fullNameUser = `${profile?.first_name} ${profile?.last_name}`;
  return (
    <>
      <Head>
        {titlePage !== null ? titlePage : 'OPo'}
      </Head>
      {/* {location.state?.errorMsg && (
        <Alert show={visible} variant='danger' >{location.state.errorMsg}</Alert>
      )} */}
      <Navbar expand='md' className='w-100 bg-color-2 shadow-md cstm-navbar'>
        <Container>
          <Navbar.Brand>
            <Link href='/dashboard' className='color-text-2 fs-4 fw-bold text-decoration-none'>
              <a>OurPocket</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className=''>
            <Nav className='ms-auto d-flex flex-column flex-sm-row gap-3 align-items-center bell-notification py-4'>
              <Link
                href='/dashboard/profile'
                className='d-flex d-sm-flex flex-column flex-sm-row gap-3 align-items-center link-rm-line'
              >
                <div>
                  <div className='d-flex img-profile-navbar-box'>
                    {/* <Image src={`http://${profile?.photo_url}`} alt={fullNameUser} fluid width={100} className='rounded-3'/> */}
                  </div>
                  <div className='d-flex flex-column color-text-2'>
                    {/* <span className='fw-bold'>{fullNameUser}</span>
                    <span className='fw-light'>{profile?.phone_number}</span> */}
                  </div>
                </div>
              </Link>

              <DropdownButton
                align='end'
                title={<FiBell size={24} className='color-text-2 icon-btn' />}
                id='dropdown-menu-align-end'
                variant='none border-0'
              >
                <NotificationCardHeader title='Today' />
                <NotificationCardItem
                  eventKey={'1'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Transfered from Joshua Lee'
                  amount={'220.000'}
                />
                <NotificationCardItem
                  eventKey={'2'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Netflix subscription'
                  amount={'149.000'}
                />
                <NotificationCardHeader title='This Week' />
                <NotificationCardItem
                  eventKey={'3'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Transfer to Jessica Lee'
                  amount={'Rp100.000'}
                />
                <NotificationCardItem
                  eventKey={'4'}
                  icon={<FiArrowUp size={24} className='color-green-light' />}
                  descTransction='Top up from BNI E-Banking'
                  amount={'300.000'}
                />
              </DropdownButton>
              <MenuNavbar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDashboard;