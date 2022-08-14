import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Container, Col, Row } from "react-bootstrap";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";
import DashboardBalanceInfo from "../../components/DashboardBalanceInfo";
import ChartInfoDashboard from "../../components/ChartInfoDashboard";
import TransactionInfoDashboard from "../../components/TransactionInfoDashboard";
import DashboardLayout from "../../components/DashboardLayout";
import { useSelector } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";
// import Cookie from "js-cookie";
// import {useRouter} from 'next/router';

function Dashboard() {
  // const navigate = useRouter();
  // React.useEffect( ()=>{
  //   const token = async () => await Cookie.get('token');
  //   if(!token){
  //     navigate.push('/login');
  //   } 
  // }, [navigate])
  return (
    <>
        {/* {loader !== null ? <ThreeCircles height="100"
  width="100"
  color="#4fa94d"
  visible={true}
  /> : <DashboardLayout>
      <Row className="gx-0">
        <Col sm={12} className="d-flex flex-column gap-5 gap-md-4">
          <DashboardBalanceInfo />
          <Row className="gx-0 gx-sm-2 d-flex flex-column flex-md-row gap-5 gap-md-0">
            <ChartInfoDashboard />
            <TransactionInfoDashboard />
          </Row>
        </Col>
      </Row>
    </DashboardLayout>}
     */}
     <DashboardLayout>
      <Row className="gx-0">
        <Col sm={12} className="d-flex flex-column gap-5 gap-md-4">
          <DashboardBalanceInfo />
          <Row className="gx-0 gx-sm-2 d-flex flex-column flex-md-row gap-5 gap-md-0">
            <ChartInfoDashboard />
            <TransactionInfoDashboard />
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
    </>
  );
}

export default Dashboard;
