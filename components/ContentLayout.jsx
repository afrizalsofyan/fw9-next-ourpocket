import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import DashboardLayout from './DashboardLayout';
import FooterDashboard from './FooterDashboard';
import NavbarDashboard from './NavbarDashboard';
import SideBarMenu from './SideBarMenu';

export const ProfileLayout = ({headerText, subtitleText, child}) => {
  return (
    <>
      <DashboardLayout>
        <ContentLayout
          child={
            <>
              <div className='d-flex flex-column gap-5'>
                <div className='w-75 px-2'>
                  <div className='d-flex flex-column gap-4 w-75 color-text-2'>
                    <span className='fw-bold fs-5'>{headerText}</span>
                    <span className='fnt-desc2'><span className='color-text-2'>{subtitleText}</span></span>
                  </div>
                </div>
                {child}
              </div>
            </>
          }
        />
      </DashboardLayout>
    </>
  );
};

function ContentLayout({ child }) {
  return (
    <Col sm={12} lg={9} className='d-flex flex-column gap-4 w-100'>
      <Row className='bg-white rounded-5 p-5 gx-0 shadow-sm'>
        {child}
      </Row>
    </Col>
  );
}

export default ContentLayout;