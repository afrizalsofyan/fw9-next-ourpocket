import { Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import * as Yup from "yup";
import AuthLayout from "../../components/AuthLayout";
import { ButtonSubmit } from "../../components/ButtonAuth";
import InputField from "../../components/InputField";
import TitleAuthForm from "../../components/TitleAuthForm";

const loginSheme = Yup.object().shape({
  email: Yup.string().email("invalid email address format").required(),
  password: Yup.string().min(4).required(),
});


const AuthForm = ({errors, handleSubmit, handleChange}) => {
    // const successMsg = useSelector((state)=> state.auth.successMsg);
    // const errorMsg = useSelector((state)=> state.auth.errorMsg);
    const [showPass, setShowPass] = React.useState(false);
    return (
      <Form className='d-flex flex-column gap-5' noValidate onSubmit={handleSubmit} onChange={handleChange}>
        {/* {successMsg && <Alert variant='success'>{successMsg}</Alert>}
        {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>} */}
        <InputField
          icon={<FiMail size={24} className='bg-grey-light' />}
          name='email'
          type='email'
          placeholder={'Enter your e-mail'}
          isInvalid={!!errors.email}
          validation={
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          }
        />
        <InputField
          icon={<FiLock size={24} className='bg-grey-light' />}
          name='password'
          type={showPass ? 'text' : 'password'}
          placeholder={'Enter your password'}
          isInvalid={!!errors.password}
          suffixIcon={
            showPass ? <FiEyeOff
              size={24}
              className='bg-grey-light'
              onClick={() => setShowPass(!showPass)}
            /> : <FiEye
              size={24}
              className='bg-grey-light'
              onClick={() => setShowPass(!showPass)}
            />
          }
          validation={
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          }
        />
        <div className='text-end my-3'>
          <Link href='/auth/forget-password' className='link-secondary link-rm-line'>
            Forgot password?
          </Link>
        </div>
        {/* <Button variant="primary" type="submit"></Button> */}
        <ButtonSubmit disable={Object.keys(errors).length === 0 ? false : true } textButton={'Login'}/>
        {/* <ButtonAuth link={"#"} textButton={"login"} type={'submit'}/> */}
        <div className='text-center'>
          <span className='color-text-secondary'>
            Don&apos;t have an account? Let&apos;s
            <Link href='/auth/register' className='link-rm-line color-text-primary fw-bold'>
              Sign Up
            </Link>
          </span>
        </div>
      </Form>
    );
  };

function Login() {
  // const location = useLocation();
  // const redirect = useNavigate();
  // const dispatch = useDispatch();
  // const token = useSelector((state)=> state.auth.token);

  const [visible, setVisible] = React.useState(false);

  const handleVisible = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  const testLogin = (value) => {
    //   const data = {email: value.email, password: value.password};
    //   dispatch(login(data));
  };

  // React.useEffect(()=>{
  //   if(token){
  //     redirect('/home/dashboard');
  //   }
  //   handleVisible();
  // }, [redirect, token]);

  return (
    <AuthLayout>
      <Col
        xs={12}
        md={5}
        className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
      >
        <div className="d-flex flex-column gap-5">
          {/* {location.state?.errorMsg && (
                <Alert show={visible} variant='danger'>{location.state.errorMsg}</Alert>
              )} */}
          <TitleAuthForm
            title={
              "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
            }
            subtitle={
              "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
            }
          />
          <Formik
            onSubmit={testLogin}
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSheme}
          >
            {(props) => <AuthForm {...props} />}
          </Formik>
        </div>
      </Col>
    </AuthLayout>
  );
}

export default Login;
