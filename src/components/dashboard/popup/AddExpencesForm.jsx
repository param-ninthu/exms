import React from "react";
import {
  Container,
  FormContainer,
  Title,
  Form,
  Label,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  TextArea,
  Select,
  Option,
  TopContainer,
} from "./popupElements";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

console.log("AddExpencesForm.jsx");
const AddExpencesForm = ({ toggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }; // your form submit function which will invoke after successful validation

  return (
    <Container>
      <TopContainer>
        {" "}
        <Title>Add Expense</Title>
        <CloseIcon onClick={toggle} />
      </TopContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer $mode="wrapper">
            <Label>Expense Name</Label>
            <Input
              {...register("exname", {
                required: true,
              })}
            />{" "}
          </InputContainer>{" "}
          <InputContainer $mode="wrapper">
            <Label>Date</Label>
            <Input
              type="date"
              {...register("date", {
                required: true,
              })}
            />{" "}
          </InputContainer>{" "}
          <InputContainer $mode="wrapper">
            <Label>Total Amount</Label>
            <Input
              {...register("amount", {
                required: true,
              })}
            />{" "}
          </InputContainer>{" "}
          <InputContainer $mode="wrapper">
            <Label>Notes</Label>
            <TextArea
              {...register("notes", {
                required: true,
              })}
            />{" "}
          </InputContainer>{" "}
          <InputContainer $mode="wrapper">
            <Label>Category</Label>
            <Select {...register("category", { required: true })}>
              <Option value="" disabled selected>
                -- Select Category --
              </Option>
              <Option value="food">Food</Option>
              <Option value="travel">Travel</Option>
              <Option value="rent">Rent</Option>
              <Option value="bills">Bills</Option>
              <Option value="others">Others</Option>
            </Select>
          </InputContainer>{" "}
          <ButtonContainer>
            <Button $mode="casual" type="submit">
              Add
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddExpencesForm;
