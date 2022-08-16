import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImagePhoneAuth from '../public/assets/img/auth-phone-img.png';
import ImageBgAuth from '../public/assets/img/auth-mask.png';
// import {Link} from 'react-router-dom';

function AuthBanner() {
  return (
    <Col xs={12} md={7} className='px-5 py-5 d-flex position-relative'>
    
      <Image alt='bg-img' src={ImageBgAuth} layout='fill' className=''/>
      <Row className='position-relative z-1'>
        <Link href='/' className='link-rm-line'>
          <Col xs={12} className='px-md-5'>
            <span className='color-text-4 fs-1 fw-bold logo-style'>OurPocket</span>
          </Col>
        </Link>
        <Col sm={12} className='d-flex w-100 flex-column gap-5 mt-4 justify-content-center'>
          <div className='d-flex flex-row align-items-center px-md-5'>
            <Image src={ImagePhoneAuth} alt='phoneimage' className='w-75 w-md-75 mx-auto'/>
          </div>
          <div className='d-flex flex-column gap-2 px-md-5'>
            <h2 className='color-text-on-bg fs-2 fw-bold'>App that Covering Banking Needs.</h2>
            <span className='color-text-on-bg fs-6'>OurPocket is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in OurPocket everyday with worldwide users coverage.
            </span>
          </div>
        </Col>
      </Row>
    </Col>
  );
}

export default AuthBanner;