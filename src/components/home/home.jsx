import React from "react";
import {
  Container,
  Logo,
  NavBar,
  NavButtons,
  Button,
  ImageContainer,
  Image,
  TitleContainer,
  Title,
  LinkR,
} from "./homeElements";

import creditcard from "./../../assets/images/creditcard.gif";

const Home = () => {
  return (
    <Container $mode="main">
      <NavBar>
        <LinkR to="/">
          <Logo>xms</Logo>
        </LinkR>
        <NavButtons>
          <LinkR to="/signin">
            <Button $mode="signin">Sign In</Button>
          </LinkR>
          <LinkR to="signup">
            {" "}
            <Button $mode="signup">Sign Up</Button>
          </LinkR>
        </NavButtons>
      </NavBar>
      <Container $mode="body">
        <ImageContainer>
          <Image src={creditcard} />
        </ImageContainer>
        <TitleContainer>
          <Title $mode="main"> Get Your </Title>
          <Title $mode="secondary"> Finances </Title>
          <Title $mode="main"> Under Control</Title>
        </TitleContainer>
      </Container>
    </Container>
  );
};

export default Home;
