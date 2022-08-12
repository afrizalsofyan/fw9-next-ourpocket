import React from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { FiMail, FiLock, FiEyeOff, FiUser, FiEye } from "react-icons/fi";
import InputField from "../../components/InputField";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import { ButtonSubmit } from "../../components/ButtonAuth";
import Link from "next/link";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actionAsync/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthLayout from "../../components/AuthLayout";

const registerScheme = Yup.object().shape({
  username: Yup.string().min(6).required(),
  email: Yup.string().email("Invalid email format").required(),
  password: Yup.string().min(4).required(),
});

const AuthRegister = ({ errors, handleSubmit, handleChange }) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Form
      className="d-flex flex-column gap-5"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <InputField
        icon={<FiUser size={24} className="bg-grey-light" />}
        name="username"
        type="text"
        placeholder="Enter your username"
        isInvalid={!!errors.username}
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiMail size={24} className="bg-grey-light" />}
        name="email"
        type="text"
        placeholder="Enter your e-mail"
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
        placeholder="Enter your password"
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
      <ButtonSubmit
        textButton="Sign Up"
        disable={Object.keys(errors).length === 0 ? false : true}
      />
    </Form>
  );
};

function Register() {
  const navigation = useRouter();
  const dispatch = useDispatch();
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const token = useSelector((state) => state.auth.token);
  const submitRegister = (val) => {
    // const dataNewUse ={email: val.email, password: val.password};
    // dispatch(register(val));
    // dispatch(login(dataNewUse));
    navigation.push("/create-pin");
  };
  // React.useEffect(()=>{
  //   if(successMsg){
  //     redirect('/auth/create-pin');
  //   }
  // }, [redirect, successMsg]);
  React.useEffect(() => {
    if (token) {
      // redirect('/auth/create-pin');
    }
  }, [token]);
  return (
    <>
      <Head>
        <title>OPo - Register</title>
      </Head>
      <AuthLayout>
        <Col
          xs={12}
          md={5}
          className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
        >
          <div className="d-flex flex-column gap-5">
            <TitleAuthForm
              title={
                "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
              }
              subtitle={
                "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
              }
            />
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
            <Formik
              onSubmit={submitRegister}
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={registerScheme}
            >
              {(props) => <AuthRegister {...props} />}
            </Formik>
          </div>
          <div className="text-center">
            <span>
              Already have an account? Let&apos;s{" "}
              <Link
                href="/login"
                className="link-rm-line fw-bold color-text-primary"
              >
                Login
              </Link>
            </span>
          </div>
        </Col>
      </AuthLayout>
    </>
  );
}

export default Register;
