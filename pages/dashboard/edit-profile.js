import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';
import { getProfile, updateNameUser, updatePhotoProfile, updateProfile } from '../../redux/actionAsync/profile';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { FcManager } from 'react-icons/fc';
import { useRouter } from 'next/router';

const EditProfileForm = ({handleSubmit, handleChange}) => {
  // const dispatch = useDispatch();
  // const token = useSelector((state)=>state.auth.token);
  const profile = useSelector((state)=>state.user.results);
  const [dataFirstName, setDataFirstName] = React.useState(profile?.firstName);
  const [dataLastName, setDataLastName] = React.useState(profile?.lastName);
  // React.useEffect(()=>{
  //   dispatch(getProfile(token));
  // }, [dispatch, token]);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='w-100 d-flex flex-column gap-4'>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>First Name</span>
          </Form.Label>
          <Form.Control
            name='firstName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={dataFirstName}
            onChange={(e)=> setDataFirstName(e.currentTarget.value)}
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Last Name</span>
          </Form.Label>
          <Form.Control
            name='lastName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={dataLastName}
            onChange={(e)=>
              setDataLastName(e.currentTarget.value)
                
            }
          />
        </div>
      </Form.Group>
      <div className='d-flex flex-row justify-content-end align-items-center mt-4 gap-3'>
        <div>
          <Link
            href='/dashboard/profile'
          >
            <a className='btn border-0 px-4 py-2 btn-danger'>
            Cancel
            </a>
          </Link>
        </div>
        <div>
          <ButtonSubmit textButton='Update Profile' />
        </div>
      </div>
    </Form>
  );
};

function EditProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state)=>state.user.results);
  const [image, setImage] = React.useState(null);

  const onSubmitEditProfile = (val) => {
    const dataPicture = {id: user.id, picture: image };
    if(image){
      dispatch(updatePhotoProfile(dataPicture));
    }
    if(val.firstName==='' && val.lastName === ''){
      router.push('/dashboard/profile');
    } else {
      const dataName = {id: user.id, firstName: val.firstName === '' ? user.firstName : val.firstName, lastName: val.lastName === '' ? user.lastName : val.lastName};
      dispatch(updateNameUser(dataName));
      router.push('/dashboard/profile');
    }
  };

  const handleUploudPhoto = (e) => {
    setImage(e.target.files[0]);
  };

  React.useEffect(()=> {
    if(image?.size > 1000 * 1000){
      window.alert('File to big.');
      setImage(null);
    }
  },[image]);
  return (
    <>
      <ProfileLayout
        headerText='Edit Pofile'
        subtitleText="Here you can edit or update your personal information data's. Just click in the field and edit your data's."
        child={
          <div className='d-flex flex-column gap-4'>
            <Form onSubmit={onSubmitEditProfile}>
              <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                  
                  {user?.image != null ?<div className='w-25'> <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${user.image}`} alt={user.firstName + ' '+user.lastName} width={100} height={140} className='rounded-4'/> </div>: 
                    <div className='mx-auto'><FcManager size={150} bbox={100} className='border rounded-circle'/></div>}
                  {/* <Image src={`http://${profile.photo_url}`} alt={profile.first_name} fluid className='rounded-4'/> */}
                  
                  <Form.Group controlId='formFile' className='my-3  text-center'>
                    <Form.Label className='color-text-2'>Update Photo</Form.Label>
                    <Form.Control type='file' onChange={handleUploudPhoto}/>
                  </Form.Group>
                </div>
              </div>
            </Form>
            <Formik onSubmit={onSubmitEditProfile} initialValues={{firstName: '', lastName: ''}}>
              {(props) => <EditProfileForm {...props} />}
            </Formik>
          </div>
        }
      />
    </>
  );
}

export default EditProfile;
