import { Formik } from 'formik';
import React from 'react';
import { Form, Image } from 'react-bootstrap';
import Link from 'next/link';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';
import { getProfile, updateProfile } from '../../redux/actionAsync/profile';
import { useDispatch, useSelector } from 'react-redux';

const EditProfileForm = ({handleSubmit, handleChange}) => {
  // const dispatch = useDispatch();
  // const token = useSelector((state)=>state.auth.token);
  // const profile = useSelector((state)=>state.profile.result);
  // const [dataFirstName, setDataFirstName] = React.useState(profile.first_name);
  // const [dataLastName, setDataLastName] = React.useState(profile.last_name);
  // const [dataEmail, setDataEmail] = React.useState(profile.email);
  // const [dataPhoneNumber, setDataPhoneNumber] = React.useState(profile.phone_number);
  // React.useEffect(()=>{
  //   dispatch(getProfile(token));
  // }, [dispatch, token]);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='w-100 d-flex flex-column gap-4'>
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column align-items-center'>
          <div className='w-25'>
            {/* <Image src={`http://${profile.photo_url}`} alt={profile.first_name} fluid className='rounded-4'/> */}
          </div>
          <Form.Group controlId='formFile' className='my-3  text-center'>
            <Form.Label className='color-text-2'>Update Photo</Form.Label>
            <Form.Control type='file' name='picture'/>
          </Form.Group>
        </div>
      </div>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>First Name</span>
          </Form.Label>
          <Form.Control
            name='firstName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            // value={dataFirstName}
            // onChange={(e)=> setDataFirstName(e.target.value)}
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
            // value={dataLastName}
            // onChange={(e)=>
            //   setDataLastName(e.currentTarget.value)
                
            // }
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Verified E-mail</span>
          </Form.Label>
          <Form.Control
            name='email'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='email'
            // value={dataEmail}
            // onChange={(e)=>
            //   setDataEmail(e.currentTarget.value)
                
            // }
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Phone Number</span>
          </Form.Label>
          <Form.Control
            name='phoneNumber'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            // value={dataPhoneNumber}
            // onChange={(e)=>
            //   setDataPhoneNumber(e.currentTarget.value)
                
            // }
          />
        </div>
      </Form.Group>

      <div className='d-flex flex-row justify-content-end align-items-center mt-4 gap-3'>
        <div>
          <Link
            href='/home/profile'
            className='btn border-0 px-4 py-2 btn-danger'
          >
            Cancel
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
  // const redirect = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token);
  // const profile = useSelector((state)=>state.profile.result);
  const onSubmitEditProfile = (val) => {
    console.log(val.picture);
    const data = {token: token, firstName: val.firstName === '' ? profile.first_name : val.firstName, lastName: val.lastName === '' ? profile.last_name : val.lastName, phoneNumber: val.phoneNumber === '' ? profile.phone_number : val.phoneNumber, picture: val.picture};
    dispatch(updateProfile(data));
    redirect('/home/profile/details');
  };
  return (
    <>
      <ProfileLayout
        headerText='Edit Pofile'
        subtitleText="Here you can edit or update your personal information data's. Just click in the field and edit your data's."
        child={
          <div className='d-flex flex-column gap-4'>
           
            <Formik onSubmit={onSubmitEditProfile} initialValues={{firstName: '', lastName: '', email: '', phoneNumber: ''}}>
              {(props) => <EditProfileForm {...props} />}
            </Formik>
          </div>
        }
      />
    </>
  );
}

export default EditProfile;
