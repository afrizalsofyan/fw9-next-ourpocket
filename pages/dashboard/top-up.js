import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';

function TopUp() {
  return (
    <>
      <NavbarDashboard titlePage='OPo - topup'/>
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div>
                  <span className='fw-bold color-text-2 fs-4'>How To Top Up</span>
                </div>
                <div className='d-flex flex-column'>
                  <ol className='mv-marker'>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Go to the nearest ATM or you can use E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type your security number on the ATM or E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Select “Transfer” in the menu.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type the virtual account number that we provide you
                            at the top.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type the amount of the money you want to top up.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Read the summary details.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>Press transfer / top up.</span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            You can see your money in Zwallet within 3 hours.
                          </span>
                        </li>
                      </div>
                    </div>
                  </ol>
                  <div className='pt-5 d-grid'>
                    <Button>TopUp Now</Button>
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

export default TopUp;
