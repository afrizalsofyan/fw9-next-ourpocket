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
import { FcManager } from 'react-icons/fc';
import Head from 'next/head';
import { getProfile } from '../redux/actionAsync/profile';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { historyTransaction } from '../redux/actionAsync/transaction';

function NavbarDashboard({ titlePage }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state)=> state.auth.results);
  const profile = useSelector((state)=> state.user.results);
  const router = useRouter();
  const data = {page: 1, limit: 5, filter: 'WEEK'};
  const transaction = useSelector((state)=>state.transaction.results);
  
  // React.useEffect(() => {
  //   if(token){
  //     dispatch(getProfile(user.id ));
  //     // dispatch(historyTransaction(data))
  //   } else {
  //     router.push('/login')
  //   }
  // }, [dispatch, user, token, router]);
  // console.log(transaction)
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
                    {profile?.image !== null ? <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${profile?.image}`} alt={fullNameUser} width={55} height={55} className='rounded-3 img-fluid'/> : <FcManager size={60}/>}
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
                <NotificationCardHeader title='This Month' />
                {transaction && transaction?.data?.map((el, index)=>{
                  return (
                    <>
                      <NotificationCardItem
                        eventKey={index}
                        icon={<FiArrowDown size={24} className={`${el.type === 'accept' || el.type === 'topup' ? 'color-green' : 'color-red' }`} />}
                        descTransction={`${el.type === 'accept'? 'Transfered from ' : el.type === 'topup'? 'Topup from ' :  'Send to '}${el.firstName}`}
                        amount={el.amount}
                      />
                    </>
                  );
                })}
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