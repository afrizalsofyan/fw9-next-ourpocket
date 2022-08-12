import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import SuccessIcon from "../../public/assets/icons/success.png";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth";
import { useRoute, useRouter } from "next/router";
import Image from "next/image";
import AuthLayout from "../../components/AuthLayout";
import Head from "next/head";

function CreatePinSuccess() {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const onLogout = () => {
    dispatch(logout());
    navigate.push("/login");
  };
  const onDashboard = () => {
    navigate.push("/dashboard");
  };
  return (
    <>
      <Head>
        <title>create pin success</title>
      </Head>
      <AuthLayout>
        <Col
          xs={12}
          md={5}
          className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
        >
          <div className="d-flex flex-column gap-5">
            <div>
              <Image src={SuccessIcon} alt="success-icon" />
            </div>
            <TitleAuthForm
              title={"Your PIN Was Successfully Created"}
              subtitle={
                "Your PIN was successfully created and you can now access all the features in OurPocket. Login to your new account and start exploring!"
              }
            />
          </div>
          <Button onClick={onLogout} className="btn bg-color-1 border-0 py-2">
            Back to Login
          </Button>
          <Button
            onClick={onDashboard}
            className="btn bg-color-1 border-0 py-2"
          >
            Go to Dashboard
          </Button>
        </Col>
      </AuthLayout>
    </>
  );
}

export default CreatePinSuccess;
