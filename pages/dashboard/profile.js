import React from 'react';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import ContentLayout from '../../components/ContentLayout';
import { FiArrowRight, FiEdit2 } from 'react-icons/fi';
import { ButtonMenuProfile } from '../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../components/DashboardLayout';
import Image from 'next/image';
import { FcManager } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';
import { deleteImageProfile } from '../../redux/actionAsync/profile';

export const HeaderProfile = ({ to, imgUser, alt, name, phone, deleteImg }) => {
  return (
    <>
      <div className='d-flex flex-column align-items-center gap-3'>
        <div className='d-flex justify-content-center img-profile-box'>
          {imgUser}
        </div>
        <div className='d-flex flex-column gap-2 align-items-center'>
          <Link href='/dashboard/edit-profile'>
            <a  className='link-rm-line link-text bg-grey-light d-flex gap-2 align-items-center'>
              <FiEdit2 size={20}/>
              <span className='fw-normal'>Edit</span>
            </a>
          </Link>
          {deleteImg ?? null}
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <span className='fw-semibold fs-5 color-text-6'>{name}</span>
        <span className='fw-light color-text-6'>{phone}</span>
      </div>
    </>
  );
};

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.auth.results);
  const successMsg = useSelector((state)=> state.user.successMsg);
  const errorMsg = useSelector((state)=> state.user.errorMsg);
  const profile = useSelector((state)=> state.user.results);
  const [show, setShow] = React.useState(false);
  React.useEffect(()=>{
    setShow(true);
    setTimeout(()=>{
      setShow(false)
    }, 3000);
  }, []);
  const fullNameUser = `${profile?.firstName} ${profile?.lastName}`;
  const handleDeleteImg = () => {
    dispatch(deleteImageProfile(user.id))
    setTimeout(()=>{
      window.location.reload();
    }, 500)
  }
  return (
    <>
      <DashboardLayout>
      <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  {errorMsg == null ? successMsg && <Alert variant='success' show={show}>{successMsg}</Alert> : errorMsg && <Alert variant='success' show={show}>{errorMsg}</Alert>}
                  <HeaderProfile
                    alt={'imgProfile'}
                    name={fullNameUser}
                    phone={profile?.noTelp}
                    to='/dashboard/profile/edit-profile'
                    deleteImg={
                      <>
                        <Button disabled={profile?.image != null ? false : true} onClick={handleDeleteImg} className='btn bg-transparent link-text bg-grey-light d-flex gap-2 align-items-center border-0 shadow-none'>
                          <FaTrash size={20}/>
                          <span>Delete Image</span>
                        </Button>
                      </>
                    }
                    imgUser={profile?.image != null ? <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${profile?.image}`} alt={profile?.firstName} width={100} height={100} className='rounded-4'/> : 
                    <div className='mx-auto'><FcManager size={150} bbox={100} className='border rounded-circle'/></div>
                    }

                  />
                  <Row>
                    <Col
                      sm={12}
                      className='d-flex flex-row justify-content-center'
                    >
                      <div className='d-flex flex-column gap-3 px-2 px-sm-5 w-75'>
                        <ButtonMenuProfile
                          menuName='Personal Information'
                          to='/dashboard/profile/details'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change Password'
                          to='/dashboard/profile/change-password'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change PIN'
                          to='/dashboard/profile/change-pin'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Logout'
                          to='/login'
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            }
          />
      </DashboardLayout>
    </>
  );
}

export default Profile;
