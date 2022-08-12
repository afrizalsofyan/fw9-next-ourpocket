import React from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import { UserCard } from '../../components/UserCard';
import Img3 from '../../public/assets/img/img3.png';
import SuccessLogo from '../../public/assets/icons/success.png';
import DetailTransferList from '../../components/DetailTransferList';
import FooterDashboard from '../../components/FooterDashboard';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';

function SuccessTransfer() {
  return (
    <>
      <NavbarDashboard />
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column gap-3'>
                      <Image src={SuccessLogo}/>
                      <span className='fs-5 fw-bold'>Transfer To</span>
                    </div>
                  </div>                    
                  {/* Title Detail */}
                  <div>
                    {/* List */}
                    <DetailTransferList/> 
                  </div>
                  {/* User Card */}
                  <div className='d-flex flex-column gap 3 ps-2 gap-3'>
                    <span className='fs-6 fw-bold color-text-2'>Transfer To</span>
                    <UserCard
                      url={'/home/transfer/3'}
                      img_path={Img3}
                      name='Samuel Suhi'
                      phone={'+62 813-8492-9994'}
                    />
                  </div>
                  <div className='d-flex flex-column flex-md-row justify-content-end mt-5 me-5 gap-3 w-100'>
                    <Button type='submit' className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm'>
                      <FiShare2 size={18} className='color-text-2' />
                    </Button>
                    <Button type='submit' className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm color-text-2'>
                      <FiDownload size={18} className=' me-3'/>
                      <span className='fw-bold '>Download PDF</span>
                    </Button>
                    <Link href='/home/dashboard'>
                      <a className='btn px-4 py-2 btn-prim-1 fw-bold'>Back to Home</a>
                    </Link>
                  </div>
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

export default SuccessTransfer;