import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import { FiPhone } from 'react-icons/fi';
import InputField from '../../components/InputField';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import  'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneNumber } from '../../redux/actionAsync/profile';

// const phoneSchema = Yup.object().shape({
//   phone: Yup.string().matches(/([8]{1})/, "Input with first number phone is 8").matches(/(([11]{2}|[12]{2}|[13]{2}|[15]{2}|[19]{2}|[21]{2}|[22]{2}|[2&3]{2}|[52]{2}|[96]{2}|[98]{2}|[99]{2}]{3}))/, "Please input code for Indonesia phone number").required().length(11),
// });

const phoneSchema = Yup.string().phone('ID', true, 'Please input with Indonesian Phone Zone').required();

export const PhoneForm = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <InputField
        icon={
          <>
            <FiPhone size={24} className='color-text-6' />
            <span className='ms-2 fw-bold color-text-6'>+62</span>
          </>
        }
        placeholder='Enter your phone number'
        type='text'
        name='phoneNumber'
        isInvalid={!!errors.phone}
        validation={
          <Form.Control.Feedback type='invalid'>
            {errors.phone}
          </Form.Control.Feedback>
        }
      />
      <div className='d-grid px-5 my-5'>
        <ButtonSubmit textButton='Add Phone Number' buttonType={'sm'}/>
      </div>
    </Form>
  );
};

function AddNewPhone() {
  // const redirect = useNavigate();
  const dispatch = useDispatch();
  // const token = useSelector((state)=> state.auth.token);
  const onSubmitPhone = async (val) => {
    if(val.phone === ''){
      window.alert('Field is required !!!');
    } else {
      const validPhone = await phoneSchema.isValid(val.phoneNumber);
      if(!validPhone){
        window.alert('Your phone is not from Indonesian zone !!!');
      } else {
        const data = {token: token, phoneNumber: val.phoneNumber};
        dispatch(addPhoneNumber(data));
        redirect('/home/profile');
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
