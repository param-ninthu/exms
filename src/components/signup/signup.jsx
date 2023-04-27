import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Error,
  Select,
  Option,
  AccountInfo,
  Link,
} from "./signupElements";
import creditcard from "./../../assets/images/creditcard.gif";

const Signup = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const countries = response.data.map((country) => ({
          name: country.name,
          flag: country.flag,
        }));
        setCountries(countries);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // validate on blur
    criteriaMode: "all", // show all errors at once
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }; // your form submit function which will invoke after successful validation

  return (
    <Container $mode="main">
      <Container $mode="body">
        <ContentContainer>
          <h1>Signup</h1>
        </ContentContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>First Name</Label>
                <Input
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />{" "}
                {errors?.firstName?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors?.firstName?.type === "maxLength" && (
                  <Error>First name cannot exceed 20 characters</Error>
                )}
                {errors?.firstName?.type === "pattern" && (
                  <Error>Alphabetical characters only</Error>
                )}
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Last Name</Label>
                <Input
                  {...register("lastName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />{" "}
                {errors?.lastName?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors?.lastName?.type === "maxLength" && (
                  <Error>First name cannot exceed 20 characters</Error>
                )}
                {errors?.lastName?.type === "pattern" && (
                  <Error>Alphabetical characters only</Error>
                )}
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Age</Label>
                <Input
                  {...register("age", {
                    max: 99,
                    required: true,
                    pattern: /^\d+$/,
                  })}
                />
                {errors?.age?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors?.age?.type === "pattern" && (
                  <Error>Numerical characters only</Error>
                )}
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Date of Birth</Label>
                <Input type="date" {...register("dob", { required: true })} />
                {errors?.dob?.type === "required" && (
                  <Error>This field is required</Error>
                )}
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="single">
              <InputContainer $mode="wrapper">
                <Label>Email</Label>
                <Input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors?.email?.type === "pattern" && (
                  <Error>Invalid email address</Error>
                )}
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Address Line 1</Label>
                <Input {...register("addressline1", { required: true })} />
                {errors?.addressline1?.type === "required" && (
                  <Error>This field is required</Error>
                )}
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Address Line 2</Label>
                <Input {...register("addressline2", { required: true })} />
                {errors?.addressline2?.type === "required" && (
                  <Error>This field is required</Error>
                )}
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>City</Label>
                <Input {...register("city", { required: true })} />
                {errors?.city?.type === "required" && (
                  <Error>This field is required</Error>
                )}
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Country</Label>
                <Select {...register("country", { required: true })}>
                  <Option value="" disabled selected>
                    -- Select Country --
                  </Option>
                  {countries.map((country) => (
                    <Option key={country.name} value={country.name}>
                      {country.name}
                    </Option>
                  ))}
                </Select>
                {errors.country && <Error>This field is required</Error>}
              </InputContainer>
            </InputContainer>
            <InputContainer $mode="double">
              <InputContainer $mode="wrapper">
                <Label>Password</Label>
                <Input
                  type="password"
                  {...register("pass", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  })}
                />
                {errors?.pass?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors?.pass?.type === "pattern" && (
                  <Error>
                    Password must contain at least 8 characters, uppercase
                    lowercase numbers
                  </Error>
                )}
              </InputContainer>
              <InputContainer $mode="wrapper">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  {...register("cpass", {
                    required: true,
                    validate: (value) => value === watch("pass"),
                  })}
                />
                {errors?.cpass?.type === "required" && (
                  <Error>This field is required</Error>
                )}
                {errors.cpass?.type === "validate" && (
                  <Error>Passwords do not match</Error>
                )}
              </InputContainer>
            </InputContainer>
            <ButtonContainer>
              <Button>Submit</Button>
            </ButtonContainer>
            <AccountInfo>
              Already have an account ? <Link> Click here </Link>{" "}
            </AccountInfo>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signup;
