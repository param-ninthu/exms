import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  ContentContainer,
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  ButtonContainer,
} from "./signupElements";
import creditcard from "./../../assets/images/creditcard.gif";

const Signup = () => {
  return (
    <Container $mode="main">
      <Container $mode="body">
        <ContentContainer>
          <h1>Signup</h1>
        </ContentContainer>
        <FormContainer>
          <Form>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>First Name</Label>
                <Input />
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Last Name</Label>
                <Input />
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Age</Label>
                <Input />
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Date of Birth</Label>
                <Input type="date" />
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="single">
              <InputContainer $mode="wrapper">
                <Label>Email</Label>
                <Input type="email" />
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Address Line 1</Label>
                <Input />
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Address Line 2</Label>
                <Input />
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>City</Label>
                <Input />
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Country</Label>
                <Input />
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Password</Label>
                <Input type="password" />
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Confirm Password</Label>
                <Input type="password" />
              </InputContainer>
            </InputContainer>
            <ButtonContainer>
              <Button>Submit</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signup;
