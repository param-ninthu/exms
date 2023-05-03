import React from "react";
import {
  Profile,
  ProfileContainer,
  TopbarContainer,
} from "../dashboardElements";
import { useNavigate } from "react-router-dom";

const TopBar = ({ onSelect }) => {
  const handleSelect = (component) => {
    onSelect(component);
  };
  const url = localStorage.getItem("prof");

  const navigate = useNavigate();

  return (
    <TopbarContainer>
      <ProfileContainer
        onClick={() => {
          handleSelect("profile");
        }}
      >
        <Profile src={url} />
      </ProfileContainer>{" "}
    </TopbarContainer>
  );
};

export default TopBar;
