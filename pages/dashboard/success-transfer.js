import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
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
import DashboardLayout from '../../components/DashboardLayout';
import Image from 'next/image';
import { FcApproval, FcManager } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { exportTransaction } from '../../redux/actionAsync/transaction';
import { useRouter } from 'next/router';

function SuccessTransfer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const recipient = useSelector((state)=>state.profile.resultsOtherUser.data);
  const idTransaction = useSelector((state)=>state.transaction.idTransaction);
  const exportLink = useSelector((state)=>state.transaction.resultsExport);
  console.log(idTransaction);
  const handleExportPdf = () => {
    dispatch(exportTransaction(idTransaction))
    if(exportLink){
      router.push(exportLink.url)
    }
  }
  return (
    <>
      <DashboardLayout>
      <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column gap-3'>
                      <FcApproval size={110}/>
                      <span className='fs-5 fw-bold'>Transfer To</span>
                    </div>
                  </div>                    
                  {/* Title Detail */}
                  <div>
                    {/* List */}
                    <DetailTransferList/> 
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
                  <div className='d-flex flex-column flex-md-row justify-content-end mt-5 me-5 gap-3 w-100'>
                    <Button type='submit' className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm'>
                      <FiShare2 size={18} className='color-text-2' />
                    </Button>
                    <Button type='submit' className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm color-text-2' onClick={handleExportPdf}>
                      <FiDownload size={18} className=' me-3'/>
                      <span className='fw-bold '>Download PDF</span>
                    </Button>
                    <Link href='/dashboard'>
                      <a className='btn px-4 py-2 btn-prim-1 fw-bold'>Back to Home</a>
                    </Link>
                  </div>
                </div>
              </>
            }
          />
      </DashboardLayout>
    </>
  );
}

export default SuccessTransfer;