import React from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { InputPin } from '../../components/InputField';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actionAsync/profile';
import { createPin, updatePin } from '../../redux/actionAsync/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AuthLayout from '../../components/AuthLayout';

const CreatePinForm = ({ errors, handleSubmit, handleChange }) => {
  return (
    <Form
      className='d-flex flex-column gap-5'
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className='d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center'>
        <InputPin name='pin1' type='text' />
        <InputPin name='pin2' type='text' />
        <InputPin name='pin3' type='text' />
        <InputPin name='pin4' type='text' />
        <InputPin name='pin5' type='text' />
        <InputPin name='pin6' type='text' />
      </div>
      <ButtonSubmit textButton={'Confirm'} />
    </Form>
  );
};

function CreatePin() {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const errorMsg = useSelector((state)=>state.auth.errorMsg);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.results);
  const [alert, setAlert] = React.useState();
  const [showAlert, setShowAlert] = React.useState(false);
  React.useEffect(()=> {
    if(token) {
      if(user.pin != null){
        navigate.push('/dashboard/change-pin');
      } 
    } else {
      navigate.push('/login');
    }
    
  }, [token, showAlert, alert, user.pin, navigate]);

  const submitPin = (value) => {
    if(value.pin1 === '' || value.pin2 === '' || value.pin3 === '' || value.pin4 === '' || value.pin5 === '' || value.pin6 === ''){
      // window.alert('Value is required');
      setAlert('Value is required');
      setShowAlert(true);
    } else {
      if (
        isNaN(parseInt(value.pin1)) === false &&
        isNaN(parseInt(value.pin2)) === false &&
        isNaN(parseInt(value.pin3)) === false &&
        isNaN(parseInt(value.pin4)) === false &&
        isNaN(parseInt(value.pin5)) === false &&
        isNaN(parseInt(value.pin6)) === false
      ) {
        const joinPin =
          value.pin1 +
          value.pin2 +
          value.pin3 +
          value.pin4 +
          value.pin5 +
          value.pin6;
        console.log(typeof joinPin);
        // navigate.push("/create-pin-success");
        const data = {id: user.id, pin: joinPin};
        dispatch(updatePin(data));
        if(!errorMsg){
          navigate.push('/create-pin-success');
        }
      } else {
        // window.alert("Please input with only number !!!");
        setAlert('Please input with only number !!!');
        setShowAlert(true);
      }
    }
  };
  return (
    <>
      <Head><title>Register - Create Pin</title></Head>
      <AuthLayout>
        <Col
          xs={12}
          md={5}
          className={
            'px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'
          }
        >
          <div className='d-flex flex-column gap-5'>
            <TitleAuthForm
              title={
                'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'
              }
              subtitle={
                'Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!'
              }
            />
            {alert && <Alert variant='danger' show={showAlert}>{alert}</Alert>
            }
            <Formik
              onSubmit={submitPin}
              initialValues={{
                pin1: '',
                pin2: '',
                pin3: '',
                pin4: '',
                pin5: '',
                pin6: '',
              }}
              // validationSchema={createPinSchema}
            >
              {(props) => <CreatePinForm {...props} />}
            </Formik>
          </div>
        </Col>
      </AuthLayout>
    </>
  );
}

export default CreatePin;
