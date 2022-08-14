import React from 'react';
// import UserPhoto from '../assets/images/img/img3.png';
import { FaRegUser } from 'react-icons/fa';
import { FiBell, FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { Navbar,  Nav, Alert, DropdownButton, Container } from 'react-bootstrap';
import {
  NotificationCardHeader,
  NotificationCardItem,
} from './NotificationCard';
import { MenuNavbar } from './SideBarMenu';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { FcManager } from "react-icons/fc";
import Head from 'next/head';
import { getProfile } from '../redux/actionAsync/profile';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';

function NavbarDashboard({ titlePage }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state)=> state.auth.results);
  const profile = useSelector((state)=> state.user.results);
  const router = useRouter();
  React.useEffect(() => {
    if(token){
      dispatch(getProfile(user.id ));
    } else {
      router.push('/login')
    }
  }, [dispatch, user, token, router]);
  
  const fullNameUser = `${profile?.firstName} ${profile?.lastName}`;
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
            <Link href='/dashboard'>
              <a className='color-text-2 fs-4 fw-bold text-decoration-none'>OurPocket</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className=''>
            <Nav className='ms-auto d-flex flex-column flex-sm-row gap-3 align-items-center bell-notification py-4'>
              <Link
                href='/dashboard/profile'
              >
                <a className='d-flex d-sm-flex flex-column flex-sm-row gap-3 align-items-center link-rm-line'>
                  <div className='d-flex img-profile-navbar-box'>
                    {profile?.image !== null ? <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${profile?.image}`} alt={fullNameUser} width={100} height={50} className='rounded-3'/> : <FcManager size={60}/>}
                  </div>
                  <div className='d-flex flex-column color-text-2'>
                     <span className='fw-bold'>{fullNameUser}</span>
                    <span className='fw-light'>{profile?.noTelp}</span>
                  </div>
                </a>
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