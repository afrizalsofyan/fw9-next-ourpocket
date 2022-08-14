import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ActiveIcon from '../public/assets/icons/active-mark.png';
import { logout } from '../redux/reducers/auth';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const MenuNavbar = () => {
  let pathUrl;
  //  = useLocation().pathname;
  let id;
  // = useParams();
  return (
    <Col className='mb-5 mb-lg-0 d-flex d-sm-none menu-navbar-collapse'>
      <div className='w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm'>
        <ul className='d-flex flex-column nav nav-tabs border-0 pe-5 gap-4'>
          <li className='nav-item'>
            <Link
              href='/home/dashboard'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? 'active fw-bold' : ''}`}
            >
              <div>
                {/* {pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? <Image src={ActiveIcon} alt='activeimg' /> : null} */}
                <FiGrid size={24} />
                <span className='fs-5'>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/home/transfer'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? 'active fw-bold' : ''}`}
            >
              <div>
                {/* {pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? <Image src={ActiveIcon} alt='activeimg' /> : null} */}
                <FiArrowUp size={24} />
                <span className='fs-5'>Transfer</span>
              </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/home/topup'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/topup' ? 'active fw-bold' : ''}`}
            >
              <div>
                {/* {pathUrl === '/home/topup' ? <Image src={ActiveIcon} alt='activeimg' /> : null} */}
                <FiPlus size={24} />
                <span className='fs-5'>TopUp</span>
              </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/home/profile'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/managePhone' || pathUrl === '/home/profile/details/managePhone/addPhone' || pathUrl === '/home/profile/changePin' || pathUrl === '/home/profile/changePin/newPin' || pathUrl === '/home/profile/changePassword' ? 'active fw-bold' : ''}`}
            >
              <div>
                {/* {pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/managePhone' || pathUrl === '/home/profile/details/managePhone/addPhone' || pathUrl === '/home/profile/changePin' || pathUrl === '/home/profile/changePin/newPin' || pathUrl === '/home/profile/changePassword' ? <Image src={ActiveIcon} alt='activeimg' /> : null} */}
                <FiUser size={24} />
                <span className='fs-5'>Profile</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className='ps-3 pb-4 py-4'>
          <Link
            href='/login'
            className='nav-link not-act border-0 d-flex flex-row gap-4 align-items-center'
          >
            <div>
              <FiLogOut size={24} />
              <span className='fs-5'>Log out</span>
            </div>
          </Link>
        </div>
      </div>
    </Col>
  );
};

function SideBarMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.auth.results);
  const router = useRouter();
  // console.log(router)
  const onLogout = () => {
    dispatch(logout(()=>{
      router.push('/login');
      window.location.reload();
    }));  
  };
  return (
    <Col sm={12} lg={3} as='aside' className='mb-5 mb-lg-0 d-none d-sm-flex'>
      <div className='w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm'>
        <ul className='d-flex flex-column nav nav-tabs border-0 pe-5 gap-4'>
          <li className='nav-item'>
            <Link
              href='/dashboard'
              // className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? 'active fw-bold' : ''}`}
            >
              <a className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${router.pathname === '/dashboard' || router.pathname.includes('history') ? 'active fw-bold':''}`}>
                {router.pathname === '/dashboard' || router.pathname === '/home/history' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
                <FiGrid size={24} />
                <span className='fs-5'>Dashboard</span>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/dashboard/transfer'
              // className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? 'active fw-bold' : ''}`}
            >
              <a className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${router.pathname.includes('transfer') ? 'active fw-bold':''}`}>
                {router.pathname.includes('transfer') ? <Image src={ActiveIcon} alt='activeimg' /> : null}
                <FiArrowUp size={24} />
                <span className='fs-5'>Transfer</span>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/dashboard/top-up'
              // className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/topup' ? 'active fw-bold' : ''}`}
            >
              <a className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${router.pathname.includes('top-up') ? 'active fw-bold':''}`}>
              {router.pathname.includes('top-up') ? <Image src={ActiveIcon} alt='activeimg' /> : null}
                <FiPlus size={24} />
                <span className='fs-5'>TopUp</span>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/dashboard/profile'
              // className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/managePhone' || pathUrl === '/home/profile/details/managePhone/addPhone' || pathUrl === '/home/profile/changePin' || pathUrl === '/home/profile/changePin/newPin' || pathUrl === '/home/profile/changePassword' ? 'active fw-bold' : ''}`}
            >
              <a className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${router.asPath.includes('profile') ? 'active fw-bold':''}`}>
              {router.asPath.includes('profile') ? <Image src={ActiveIcon} alt='activeimg' /> : null}
                <FiUser size={24} />
                <span className='fs-5'>Profile</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className='ps-3 pb-4 py-4'>
            <Button className='nav-link not-act border-0 d-flex flex-row gap-4 align-items-center bg-transparent' onClick={onLogout}>
                <FiLogOut size={24} />
                <span className='fs-5'>Log out</span>
              </Button>
        </div>
      </div>
    </Col>
  );
}

export default SideBarMenu;