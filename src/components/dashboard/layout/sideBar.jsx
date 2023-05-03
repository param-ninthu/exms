import React from "react";
import {
  List,
  LogoContainer,
  SidnavContainer,
  ListItem,
  LogoutContainer,
  LinkR,
} from "../dashboardElements";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = ({ onSelect }) => {
  const handleSelect = (component) => {
    onSelect(component);
  };

  return (
    <SidnavContainer>
      <LogoContainer>xms</LogoContainer>
      <List>
        <ListItem onClick={() => handleSelect("home")}>
          <DashboardIcon />
          Dashboard
        </ListItem>
        <ListItem onClick={() => handleSelect("reports")}>
          {" "}
          <AssessmentIcon /> Reports
        </ListItem>
        <ListItem onClick={() => handleSelect("settings")}>
          {" "}
          <SettingsIcon /> Settings
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => handleSelect("logout")}>
          <LogoutIcon />
          Logout
        </ListItem>
      </List>
    </SidnavContainer>
  );
};

export default Sidebar;
