import React, { useState, useEffect } from "react";
import {
  Container,
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
} from "./profileElements";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/Users";

const Profile = () => {
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    // mode: "onBlur", // validate on blur
    // criteriaMode: "all", // show all errors at once
  });
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
  const user = useSelector((state) => state.users.value);
  const [userData, setUserData] = useState({ user });

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <Container $mode="main">
        <Container $mode="body">
          <FormContainer>
            {user?.map((user) => (
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
                      defaultValue={user.firstName}
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
                      defaultValue={user.lastName}
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
                      defaultValue={user.age}
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
                    <Input
                      defaultValue={user.dob}
                      type="date"
                      {...register("dob", { required: true })}
                    />
                    {errors?.dob?.type === "required" && (
                      <Error>This field is required</Error>
                    )}
                  </InputContainer>
                </InputContainer>
                <InputContainer $mode="single">
                  <InputContainer $mode="wrapper">
                    <Label>Email</Label>
                    <Input
                      defaultValue={user.email}
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
                    <Input
                      defaultValue={user.addressline1}
                      {...register("addressline1", { required: true })}
                    />
                    {errors?.addressline1?.type === "required" && (
                      <Error>This field is required</Error>
                    )}
                  </InputContainer>
                  <InputContainer $mode="wrapper">
                    <Label>Address Line 2</Label>
                    <Input
                      defaultValue={user.addressline2}
                      {...register("addressline2", { required: true })}
                    />
                    {errors?.addressline2?.type === "required" && (
                      <Error>This field is required</Error>
                    )}
                  </InputContainer>
                </InputContainer>
                <InputContainer $mode="double">
                  <InputContainer $mode="wrapper">
                    <Label>City</Label>
                    <Input
                      defaultValue={user.city}
                      {...register("city", { required: true })}
                    />
                    {errors?.city?.type === "required" && (
                      <Error>This field is required</Error>
                    )}
                  </InputContainer>
                  <InputContainer $mode="wrapper">
                    <Label>Country</Label>
                    <Select
                      defaultValue={user.country}
                      {...register("country", { required: true })}
                    >
                      <Option key={user.country} value={user.country} selected>
                        {user.country}
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
                <ButtonContainer>
                  <Button>Save Changes</Button>
                </ButtonContainer>
              </Form>
            ))}
          </FormContainer>
        </Container>
      </Container>
    </>
  );
};

export default Profile;
