import React, { useState } from "react";
import Sidebar from "./layout/sideBar";
import TopBar from "./layout/topBar";
import { Container } from "./dashboardElements";
import MainScreen from "./screens/mainScreen";
import ReportScreen from "./screens/reportScreen";
import Profile from "../profile/profile";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("home");

  const handleSidebarSelect = (component) => {
    setSelectedComponent(component);
  };

  const handleTopBarSelect = (component) => {
    setSelectedComponent(component);
  };

  let componentToRender;
  switch (selectedComponent) {
    case "home":
      componentToRender = <MainScreen />;
      break;
    case "reports":
      componentToRender = <ReportScreen />;
      break;
    case "profile":
      componentToRender = <Profile />;
      break;
    default:
      componentToRender = <MainScreen />;
      break;
  }

  return (
    <>
      <Container $mode="dashboard">
        <Container $mode="side">
          <Sidebar onSelect={handleSidebarSelect} />
        </Container>
        <Container $mode="wrapper">
          <Container $mode="top">
            <TopBar onSelect={handleTopBarSelect} />
          </Container>
          <Container $mode="body">{componentToRender}</Container>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
