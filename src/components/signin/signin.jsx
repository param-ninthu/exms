import React from "react";
import {
  Container,
  ContentContainer,
  FormContainer,
  Form,
  Label,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  Info,
} from "./signinElements";
import GoogleIcon from "@mui/icons-material/Google";

const Signin = () => {
  return (
    <Container $mode="main">
      <Container $mode="body">
        <ContentContainer>
          <h1>Sign In</h1>
        </ContentContainer>
        <FormContainer>
          <Form>
            <InputContainer $mode="wrapper">
              <Label>Email</Label>
              <Input />{" "}
            </InputContainer>
            <InputContainer $mode="wrapper">
              <Label>Password</Label>
              <Input type="password" />{" "}
            </InputContainer>
            <ButtonContainer>
              <Button $mode="casual" type="submit">
                Sign In
              </Button>
            </ButtonContainer>
            <Info
              style={{
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Or
            </Info>

            <ButtonContainer>
              <Button $mode="google" type="submit">
                <GoogleIcon /> Sign In with Google
              </Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signin;
