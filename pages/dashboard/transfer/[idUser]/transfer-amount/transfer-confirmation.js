import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import ContentLayout from '../../../../../components/ContentLayout';
import FooterDashboard from '../../../../../components/FooterDashboard';
import NavbarDashboard from '../../../../../components/NavbarDashboard';
import SideBarMenu from '../../../../../components/SideBarMenu';
import { UserCard } from '../../../../../components/UserCard';
// import Img3 from '../../assets/images/img/img3.png';
import DetailTransferList from '../../../../../components/DetailTransferList';
import ModalTransferConfirmation from '../../../../../components/ModalTransferConfirmation';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from '../../redux/actionAsync/user';

function TransferConfirmation() {
  
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  // const {id} = useParams();
  // const recipient = useSelector((state)=>state.user.dataUser);
  return (
    <>
      <NavbarDashboard />
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-5 color-text-2'>
                  <div>
                    <span className='fs-5 fw-bold'>Transfer To</span>
                  </div>
                  {/* User Card */}
                  {/* <UserCard
                    url={'/home/transfer/3'}
                    img_path={Img3}
                    name={`${recipient?.first_name} ${recipient?.last_name}`}
                    phone={recipient?.phone_number}
                  /> */}
                  {/* Title Detail */}
                  <div>
                    <span className='fw-bold'>Details</span>
                    {/* List */}
                    <DetailTransferList/>
                    {/* Button Modal */}
                    <div className='w-25 ms-auto mt-5 me-auto me-sm-0 d-grid'>
                      <Button
                        className='btn btn-prim-1 py-2'
                        onClick={openModal}
                      >
                            Continue
                      </Button>
                    </div>
                    <ModalTransferConfirmation show={showModal} onHide={closeModal}/>
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

export default TransferConfirmation;
