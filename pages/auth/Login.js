import { Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import AuthLayout from "../../components/AuthLayout";
import { ButtonSubmit } from "../../components/ButtonAuth";
import InputField from "../../components/InputField";
import TitleAuthForm from "../../components/TitleAuthForm";
import { useRouter } from "next/router";
import { login } from "../../redux/actionAsync/auth";
import Cookie from "js-cookie";
import { getProfile } from "../../redux/actionAsync/profile";

const loginSheme = Yup.object().shape({
  email: Yup.string().email("invalid email address format").required(),
  password: Yup.string().min(3).required(),
});

const AuthForm = ({ errors, handleSubmit, handleChange }) => {
  
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Form
      className="d-flex flex-column gap-5"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      
      <InputField
        icon={<FiMail size={24} className="bg-grey-light" />}
        name="email"
        type="email"
        placeholder={"Enter your e-mail"}
        isInvalid={!!errors.email}
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="password"
        type={showPass ? "text" : "password"}
        placeholder={"Enter your password"}
        isInvalid={!!errors.password}
        suffixIcon={
          showPass ? (
            <FiEyeOff
              size={24}
              className="bg-grey-light"
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <FiEye
              size={24}
              className="bg-grey-light"
              onClick={() => setShowPass(!showPass)}
            />
          )
        }
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        }
      />
      <div className="text-end my-3">
        <Link href="/forget-password">
          <a className="link-secondary link-rm-line">Forgot password?</a>
        </Link>
      </div>
      {/* <Button variant="primary" type="submit"></Button> */}
      <ButtonSubmit
        disable={Object.keys(errors).length === 0 ? false : true}
        textButton={"Login"}
      />
      {/* <ButtonAuth link={"#"} textButton={"login"} type={'submit'}/> */}
      <div className="text-center">
        <span className="color-text-secondary">
          Don&apos;t have an account? Let&apos;s{" "}
          <Link href="/register">
            <a className="link-rm-line color-text-primary fw-bold">Sign Up</a>
          </Link>
        </span>
      </div>
    </Form>
  );
};

function Login() {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const notActive = useSelector((state) => state.auth.results?.errorMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const successMsg = useSelector((state)=>state.auth.successMsg);
  const user = useSelector((state)=> state.auth.results);
  const [visible, setVisible] = React.useState(false);
  const token = useSelector((state) => state.auth?.token);
  const handleVisible = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };
  React.useEffect(() => {
    if(token) {
      if(user.pin === null) {
        navigate.push('/create-pin');
      } else {
        navigate.push('/dashboard');
      }
    }
    
    handleVisible();
  }, [token, user.pin]);

  const testLogin = (value) => {
    const data = { email: value.email, password: value.password };
    dispatch(login(data));
    dispatch(getProfile(user.id ));
    handleVisible();
    console.log(user);
  };

  return (
    <>
      <Head>
        <title>Login - OPo</title>
      </Head>
      <AuthLayout>
        <Col
          xs={12}
          md={5}
          className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
        >
          <div className="d-flex flex-column gap-5">
           {notActive && <Alert variant="danger" show={visible}>{notActive}</Alert>}
            <TitleAuthForm
              title={
                "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
              }
              subtitle={
                "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
              }
            />
             {errorMsg && <Alert variant="danger" show={visible}>{errorMsg}</Alert>}
             {successMsg && <Alert variant="success" show={visible}>{successMsg}</Alert>}
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
    </>
  );
}

export default Login;
