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
const Sidebar = () => {
  return (
    <SidnavContainer>
      <LogoContainer>xms</LogoContainer>
      <List>
        <ListItem>
          <DashboardIcon />
          Dashboard
        </ListItem>
        <ListItem>
          <LinkR to="/reports">
            {" "}
            <AssessmentIcon /> Reports
          </LinkR>
        </ListItem>
        <ListItem>
          {" "}
          <SettingsIcon /> Settings
        </ListItem>
      </List>
      <List>
        <ListItem>
          <LogoutIcon />
          Logout
        </ListItem>
      </List>
    </SidnavContainer>
  );
};

export default Sidebar;
