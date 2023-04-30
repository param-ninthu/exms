import React from "react";
import { ProfileContainer, TopbarContainer } from "../dashboardElements";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const onNavigate = () => {
    navigate("/profile");
  };
  const navigate = useNavigate();

  return (
    <TopbarContainer>
      <ProfileContainer onClick={onNavigate}></ProfileContainer>{" "}
    </TopbarContainer>
  );
};

export default TopBar;
