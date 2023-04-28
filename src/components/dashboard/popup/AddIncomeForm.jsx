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
  TopContainer,
} from "./popupElements";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

const AddIncomeForm = ({ toggle }) => {
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
  };
  return (
    <Container>
      <TopContainer>
        {" "}
        <Title>Add Income</Title>
        <CloseIcon onClick={toggle} />
      </TopContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer $mode="wrapper">
            <Label>Source of Income</Label>
            <Input
              {...register("inname", {
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

export default AddIncomeForm;
