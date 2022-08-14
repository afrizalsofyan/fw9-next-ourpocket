import React from 'react';
import { Form } from 'react-bootstrap';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';
import { InputPin } from '../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { updatePin } from '../../redux/actionAsync/auth';
import { useRouter } from 'next/router';

const ChangePinForm = ({errors, handleChange, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4'>
      <div className='d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center'>
        <InputPin  
          name={`pin[${0}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${1}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${2}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${3}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${4}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${5}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
      </div>
      <span className='fs-6 text-danger'>
        {errors.pin}
      </span>
      <ButtonSubmit textButton='Confirm' />
      {/* <div className="d-grid px-5 mb-5 w-75 mx-auto">
              <Link
                to="newPin"
                className="btn border-0 px-4 py-2 btn-prim-1"
              >
                <span>Confirm</span>
              </Link>
            </div> */}
    </Form>
  );
};

function ChangeNewPin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state)=> state.auth.results);
  const errorMsg = useSelector((state)=>state.auth.errorMsg);
  const onSubmitPin = (val) => {
    if(val.pin[0] === '' || val.pin[1] === '' || val.pin[2] === '' || val.pin[3] === '' || val.pin[4] === '' || val.pin[5] === ''){
      window.alert('Value is required');
    } else {
      if (isNaN(parseInt(val.pin[0])) === false && isNaN(parseInt(val.pin[1])) === false && isNaN(parseInt(val.pin[2])) === false && isNaN(parseInt(val.pin[3])) === false && isNaN(parseInt(val.pin[4])) === false && isNaN(parseInt(val.pin[5])) === false){
        const finalPin = val.pin.join('');  
        const data = {id: user?.id, pin: finalPin};
        dispatch(updatePin(data));
        if(!errorMsg){
          router.push('/dashboard/profile');
        }
      } else {
        window.alert('Please input with only number !!!');
      }
    }
  };
  return (
    <>
      <ProfileLayout
        headerText='Change PIN'
        subtitleText='Type your new 6 digits security PIN to use in OurPocket.'
        child={
          <>
            <Formik
              onSubmit={onSubmitPin}
              initialValues={{
                pin: [''],
              }}
              
              // validationSchema={changePinSchema}
            >
              {(props) => <ChangePinForm {...props} />}
            </Formik>
          </>
        }
      />
    </>
  );
}

export default ChangeNewPin;