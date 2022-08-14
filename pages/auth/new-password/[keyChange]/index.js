import React from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import InputField from "../../../../components/InputField";
import TitleAuthForm from "../../../../components/TitleAuthForm";
import { ButtonSubmit } from "../../../../components/ButtonAuth";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Head from "next/head";
import AuthLayout from "../../../../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../../redux/actionAsync/auth";
import Link from "next/link";

const newPassSheme = Yup.object().shape({
  password: Yup.string().min(4).required(),
  confirmPassword: Yup.string().min(4).required(),
});

export const NewPass = ({
  errors,
  handleSubmit,
  handleChange,
  matchedFeedback,
}) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  const errorMsg = useSelector((state)=> state.auth.errorMsg);
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  React.useEffect(() => {
    if(errorMsg){
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, [errorMsg]);
  return (
    <Form
      className="d-flex flex-column gap-5"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      {errorMsg && <Alert variant="danger" show={visible}>{errorMsg}</Alert>}
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="password"
        type={showPass ? "text" : "password"}
        placeholder={"Create new password"}
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
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="confirmPassword"
        type={showConfirmPass ? "text" : "password"}
        placeholder={"Confirm new password"}
        isInvalid={!!errors.confirmPassword}
        suffixIcon={
          showConfirmPass ? (
            <FiEyeOff
              size={24}
              className="bg-grey-light"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            />
          ) : (
            <FiEye
              size={24}
              className="bg-grey-light"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            />
          )
        }
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        }
      />
      {errorMsg != null ? <div className="text-end">
        <Link href='/forget-password'>
          <a className="link-secondary link-rm-line">Back to forget ?</a>
        </Link>
      </div> : null }

      <ButtonSubmit
        textButton={"Reset Password"}
        disable={Object.keys(errors).length === 0 ? false : true}
      />
    </Form>
  );
};

function NewPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const errorMsg = useSelector((state)=>state.auth.errorMsg);
  const submitNewPass = (values) => {
    const {keyChange} = router.query;
    if (values.password === values.confirmPassword) {
      const data = {keyChangePass: keyChange, newPass: values.password, confirmPass: values.confirmPassword};
      dispatch(resetPassword(data));
      if(!errorMsg){
        router.push('/login')
      }
    } else {
      window.alert("Confirm password incorrect");
    }
  };
  return (
    <>
      <Head>
        <title>Forget Password - Reset Password</title>
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
            <Formik
              onSubmit={submitNewPass}
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={newPassSheme}
            >
              {(props) => <NewPass {...props} />}
            </Formik>
          </div>
          {/* <ButtonAuth link={"/auth/login"} textButton={"Reset Password"} /> */}
        </Col>
      </AuthLayout>
    </>
  );
}

export default NewPassword;
