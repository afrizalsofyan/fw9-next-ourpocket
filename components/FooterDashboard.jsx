import React from 'react';
import { Row, Container } from 'react-bootstrap';

function FooterDashboard() {
  return (
    <Row className='bg-color-2 gx-0 mt-5' as='footer'>
      <Container className='p-5'>
        <div className='d-flex flex-column flex-sm-row justify-content-between gap-4 gap-sm-0 align-items-center'>
          <span className='fw-semibold color-text-2'>2020 Zwallet. All right reserved.</span>
          <div className='d-flex flex-column flex-sm-row justify-content-between gap-4'>
            <div>
              <span className='color-text-2 fw-semibold'>+62 5637 8882 9901</span>
            </div>
            <div>
              <span className='color-text-2 fw-semibold'>contact@zwallet.com</span>
            </div>
          </div>
        </div>
      </Container>
    </Row>
  );
}

export default FooterDashboard;