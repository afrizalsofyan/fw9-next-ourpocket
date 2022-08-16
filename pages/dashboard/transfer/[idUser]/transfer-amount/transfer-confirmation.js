import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ContentLayout from '../../../../../components/ContentLayout';
import FooterDashboard from '../../../../../components/FooterDashboard';
import NavbarDashboard from '../../../../../components/NavbarDashboard';
import SideBarMenu from '../../../../../components/SideBarMenu';
import { UserCard } from '../../../../../components/UserCard';
import DetailTransferList from '../../../../../components/DetailTransferList';
import ModalTransferConfirmation from '../../../../../components/ModalTransferConfirmation';
import DashboardLayout from '../../../../../components/DashboardLayout';
import Image from 'next/image';
import { FcManager } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileOtherUser } from '../../../../../redux/actionAsync/user';
import { useRouter } from 'next/router';

function TransferConfirmation() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  // const {id} = useParams();
  const recipient = useSelector((state)=>state.profile.resultsOtherUser.data);
  React.useEffect(() => {
    dispatch(getProfileOtherUser(router.query.idUser));
  }, [dispatch, router.query.idUser]);
  return (
    <>
      <DashboardLayout>
      <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-4 color-text-2'>
                  <div>
                    <span className='fs-5 fw-bold'>Transfer To</span>
                  </div>
                  {/* User Card */}
                  <div className="d-flex flex-column align-items-center flex-sm-row justify-content-between">
                  <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                    {recipient?.image ? (
                      <Image
                        className="we-3"
                        src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${recipient?.image}`}
                        alt=""
                        width={50}
                        height={50}
                      />
                    ) : (
                      <FcManager size={60} />
                    )}
                    <div className="d-flex flex-column">
                      <span className="fw-semibold color-text-6">{`${recipient?.firstName} ${recipient?.lastName}`}</span>
                      <span className="fw-light color-text-6">{recipient?.noTelp ?? '-'}</span>
                    </div>
                  </div>
                </div>
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
      </DashboardLayout>
    </>
  );
}

export default TransferConfirmation;
