import React from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import { ButtonSubmit } from '../../components/ButtonAuth';

const ModalTopupBalance = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      centered
    >
      {/* onSubmit={handleSubmit} onChange={handleChange */}
      <Form noValidate>
        <Modal.Header closeButton className='border-0 cstm-btn-modal'>
          <Modal.Title className='modal-title fw-bold'>
            <span className='color-text-2'>Topup</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-75'>
            <span className='fnt-desc color-text-2'>
            Enter the amount of money, and click submit
            </span>
          </div>
          <div className='pt-5 pb-4'>
            <div className='d-grid pin-wrapper w-100'>
              <Form.Group>
                <Form.Control
                  type='number'
                  name='topup-amount'
                  className='shadow-none rounded-0 color-text-6 rounded-3 fw-bold fs-5 text-center border-bottom-1'
                />
              </Form.Group>
            </div>
          </div>
          {/* <span className='fs-6 py-5 text-danger'>{errors.pin}</span> */}
        </Modal.Body>
        <Modal.Footer className='border-0 modal-footer-position'>

          <div className='d-flex flex-column justify-content-center flex-sm-row gap-3'>
            <ButtonSubmit textButton='Submit' />
          </div>
        </Modal.Footer>
      </Form>
    </Modal >
  )
}

function TopUp() {
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
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
                    <Button className='btn border-0 px-4 py-2 btn-prim-1' onClick={openModal}>TopUp Now</Button>
                  </div>
                  <ModalTopupBalance show={showModal} onHide={closeModal}/>
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
