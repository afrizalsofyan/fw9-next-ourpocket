import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import { FiPhone } from 'react-icons/fi';
import { Formik } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import  'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePhoneNumber } from '../../redux/actionAsync/profile';

const phoneSchema = Yup.string().phone('ID', true, 'Please input with Indonesian Phone Zone').required();

export const PhoneForm = ({errors, handleSubmit, handleChange}) => {
  const user = useSelector((state)=>state.user.results);
  const [phoneNum, setPhoneNum] = React.useState(user?.noTelp);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <InputGroup>
        <InputGroup.Text className={`bg-input-group rounded-0 ${!!errors.phoneSchema === true ? 'border-danger' : null}`}>
          <FiPhone size={24} className='color-text-6' />
          <span className='ms-2 fw-bold color-text-6'>+62</span>
        </InputGroup.Text>
        <Form.Control className='cstm-border rounded-0 color-text-6' value={phoneNum} onChange={(e)=>setPhoneNum(e.currentTarget.value)} name='phoneNumber' type='text' placeholder='Enter your phone number' isInvalid={!!errors.phoneSchema} />
        <Form.Control.Feedback type='invalid'>
          {errors.phoneSchema}
        </Form.Control.Feedback>
      </InputGroup>
      <div className='d-grid px-5 my-5'>
        <ButtonSubmit textButton={user?.noTelp == null ? 'Add Phone Number' : 'Update Phone Number'} buttonType={'sm'}/>
      </div>
    </Form>
  );
};

function AddNewPhone() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state)=> state.auth.results);
  const errorMsg = useSelector((state)=>state.user.errorMsg);
  const onSubmitPhone = async (val) => {
    // console.log(val);
    if(val.phone === ''){
      window.alert('Field is required !!!');
    } else {
      const validPhone = await phoneSchema.isValid(val.phoneNumber);
      if(!validPhone){
        window.alert('Your phone is not from Indonesian zone !!!');
      } else {
        const data = {id: user?.id, phoneNumber: val.phoneNumber};
        dispatch(updatePhoneNumber(data));
        if(!errorMsg){
          router.push('/dashboard/profile');
        }
      }
    }
  };
  return (
    <>
      <ProfileLayout
        headerText='Add Phone Number'
        subtitleText='Add at least one phone number for the transfer ID so you can start transfering your money to another user.'
        child={
          <>
            <div className='d-flex flex-row justify-content-center py-5'>
              <div className='d-flex flex-column justify-content-center gap-5 w-75'>
                <Formik
                  onSubmit={onSubmitPhone}
                  initialValues={{ phoneNumber: '' }}
                  validationSchema={phoneSchema}
                >
                  {(props) => <PhoneForm {...props} />}
                </Formik>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default AddNewPhone;
