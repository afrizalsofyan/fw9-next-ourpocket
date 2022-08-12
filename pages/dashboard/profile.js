import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import Img1 from '../../public/assets/img/img3.png';
import { FiArrowRight, FiEdit2 } from 'react-icons/fi';
import { ButtonMenuProfile } from '../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
// import { getProfile } from '../../redux/actionAsync/profile';


export const HeaderProfile = ({ to, imgUrl, alt, name, phone }) => {
  return (
    <>
      <div className='d-flex flex-column align-items-center gap-3'>
        <div className='d-flex img-profile-box'>
          <Image src={imgUrl} alt={alt} fluid className='rounded-4'/>
        </div>
        <Link to='/home/profile/edit-profile' className='link-rm-line link-text bg-grey-light d-flex gap-2 align-items-center'>
          <FiEdit2 size={20}/>
          <span className='fw-normal'>Edit</span>
        </Link>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <span className='fw-semibold fs-5 color-text-6'>{name}</span>
        <span className='fw-light color-text-6'>{phone}</span>
      </div>
    </>
  );
};

function Profile() {
  // const dispatch = useDispatch();
  // const token = useSelector((state)=> state.auth.token);
  // const profile = useSelector((state)=> state.profile.result);

  // React.useEffect(()=>{
  //   dispatch(getProfile(token));
  // }, [dispatch, token]);
  // const fullNameUser = `${profile.first_name} ${profile.last_name}`;
  return (
    <>
      <NavbarDashboard titlePage='OPo - profile'/>
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  {/* <HeaderProfile
                    alt={'imgProfile'}
                    imgUrl={`http://${profile.photo_url}`}
                    name={fullNameUser}
                    phone={profile.phone_number}
                    to='/home/profile'
                  /> */}
                  <Row>
                    <Col
                      sm={12}
                      className='d-flex flex-row justify-content-center'
                    >
                      <div className='d-flex flex-column gap-3 px-2 px-sm-5 w-75'>
                        <ButtonMenuProfile
                          menuName='Personal Information'
                          to='details'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change Password'
                          to='change-password'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change PIN'
                          to='change-pin'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Logout'
                          to='/auth/login'
                        />
                      </div>
                    </Col>
                  </Row>
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

export default Profile;
