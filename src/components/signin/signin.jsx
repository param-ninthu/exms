import React, { useState } from "react";
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
  PasswordField,
  IconButton,
  Error,
  AccountInfo,
  LinkA,
} from "./signinElements";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findUser } from "../../features/Users";
import { logUser } from "../../features/Login";
import { LinkR, Logo, NavBar } from "../home/homeElements";
import GoogleButton from "react-google-button";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [password, setPassword] = useState("");
  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    if (localStorage.getItem("user") !== null) {
      const users = JSON.parse(localStorage.getItem("user"));
      if (users.email === data.email && users.pass === data.password) {
        dispatch(logUser(users));
        navigate("/dashboard");
      } else {
        console.log(users.email);
        alert("Invalid Credentials");
      }
    }

    const onSuccess = (res) => {
      console.log("Login Success: currentUser:", res.profileObj);
    };
    const onFailure = (res) => {
      console.log("Login failed: res:", res);
    };

    reset();
  }; // your form submit function which will invoke after successful validation

  return (
    <Container $mode="main">
      <NavBar>
        <LinkR to="/">
          <Logo>xms</Logo>
        </LinkR>
      </NavBar>
      <Container $mode="body">
        <ContentContainer>
          <h1>Sign In</h1>
        </ContentContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer $mode="wrapper">
              <Label>Email</Label>
              <Input
                {...register("email", {
                  required: true,
                })}
              />{" "}
              {errors?.email?.type === "required" && (
                <Error>Enter the email address</Error>
              )}
            </InputContainer>
            <InputContainer $mode="wrapper">
              <Label>Password</Label>
              <Input
                type="password"
                {...register("password", {
                  required: true,
                })}
              />{" "}
              {errors?.password?.type === "required" && (
                <Error>Enter the Password</Error>
              )}
              {/* <PasswordField>
                <Input
                  type={passwordShown ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <IconButton onClick={togglePassword}>
                  {passwordShown ? (
                    <VisibilityIcon sx={{ color: "#000" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#000" }} />
                  )}
                </IconButton>
              </PasswordField> */}
            </InputContainer>

            <ButtonContainer>
              <Button $mode="casual" type="submit">
                Sign In
              </Button>
            </ButtonContainer>
            <AccountInfo>
              Not Registered yet ? <LinkA to="/signup"> Click here </LinkA>{" "}
            </AccountInfo>
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
              <GoogleButton
                style={{ height: "50px", width: "100%" }}
                onClick={() => {
                  window.location.href = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
                    "http://localhost:3000/dashboard"
                  )}&response_type=code&client_id=${encodeURIComponent(
                    "183345601616-b2c5f1fefdj64m8slrqmsmo2j8q8qk1p.apps.googleusercontent.com"
                  )}&scope=${encodeURIComponent(
                    "https://www.googleapis.com/auth/userinfo.email"
                  )}&access_type=offline&approval_prompt=force`;
                }}
              />
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signin;
