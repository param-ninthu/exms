import React from "react";
import Sidebar from "./layout/sideBar";
import TopBar from "./layout/topBar";
import Body from "./layout/body";
import { Container } from "./dashboardElements";

const Dashboard = () => {
  return (
    <>
      <Container $mode="dashboard">
        <Container $mode="side">
          <Sidebar />
        </Container>
        <Container $mode="wrapper">
          <Container $mode="top">
            <TopBar />
          </Container>
          <Container $mode="body">
            <Body />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
