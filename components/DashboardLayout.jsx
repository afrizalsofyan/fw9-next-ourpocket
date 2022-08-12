import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FooterDashboard from './FooterDashboard';
import NavbarDashboard from './NavbarDashboard';
import SideBarMenu from './SideBarMenu';

function DashboardLayout(props) {
  
    return (
        <>
          {/* HEADER NAVBAR */}
          <NavbarDashboard titlePage='OPo - Dashboard'/>
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
          <FooterDashboard/>
        </>
      );
}

export default DashboardLayout;