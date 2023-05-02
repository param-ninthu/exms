import React from "react";
import {
  Profile,
  ProfileContainer,
  TopbarContainer,
} from "../dashboardElements";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const url = localStorage.getItem("prof");

  const onNavigate = () => {
    navigate("/profile");
  };
  const navigate = useNavigate();

  return (
    <TopbarContainer>
      <ProfileContainer onClick={onNavigate}>
        <Profile src={url} />
      </ProfileContainer>{" "}
    </TopbarContainer>
  );
};

export default TopBar;
