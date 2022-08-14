import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import InputField from "../../components/InputField";
import { ButtonSubmit } from "../../components/ButtonAuth";
import { FiMail } from "react-icons/fi";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Head from "next/head";
import AuthLayout from "../../components/AuthLayout";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../redux/actionAsync/auth";

const forgetPassSheme = Yup.object().shape({
  email: Yup.string().email("invalid email address format").required(),
});

export const AuthForgetPass = ({ errors, handleSubmit, handleChange }) => {
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
      <ButtonSubmit
        textButton={"Confirm"}
        disable={Object.keys(errors).length === 0 ? false : true}
      />
    </Form>
  );
};
function ForgetPassword() {
  const dispatch = useDispatch();
  const onForgetPassword = (val) => {
    dispatch(forgetPassword(val));
  };
  return (
    <>
      <Head><title>Forget Password</title></Head>
      <AuthLayout>
        <Col
          xs={12}
          md={5}
          className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
        >
          <div className="d-flex flex-column gap-5">
            <TitleAuthForm
              title={
                "Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes."
              }
              subtitle={
                "To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."
              }
            />
            <Formik
              onSubmit={onForgetPassword}
              initialValues={{ email: "" }}
              validationSchema={forgetPassSheme}
            >
              {(props) => <AuthForgetPass {...props} />}
            </Formik>
          </div>
        </Col>
      </AuthLayout>
    </>
  );
}

export default ForgetPassword;
