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
} from "./homeElements";

import creditcard from "./../../assets/images/creditcard.gif";

const Home = () => {
  return (
    <Container $mode="main">
      <NavBar>
        <Logo>xms</Logo>
        <NavButtons>
          <Button $mode="signin">Sign In</Button>
          <Button $mode="signup">Sign Up</Button>
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
