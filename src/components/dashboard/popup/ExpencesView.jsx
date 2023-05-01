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
  ImageContainer,
  ContentContainer,
  IconContainer,
  Image,
  SubContainer,
  ContentTitle,
  Content,
} from "./popupElements";

import food from "../../../assets/icons/food.png";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateExpense } from "../../../features/Expense";

const ExpencesView = ({ toggle }) => {
  const exname = localStorage.getItem("expense");

  return (
    <Container $mode="exview">
      <ImageContainer>
        <Image src={food} />
      </ImageContainer>
      <ContentContainer>
        <ContentTitle>Hello</ContentTitle>
        <InputContainer $mode="wrapper">
          <Input type="text" defaultValue="Vanakkam" />
        </InputContainer>
        <Content>Vankkam vanthanam makkale</Content>
      </ContentContainer>
      <IconContainer>
        <CloseIcon onClick={toggle} />
        <SubContainer>
          {" "}
          <ArchiveIcon />
          <DeleteIcon />
        </SubContainer>
      </IconContainer>
    </Container>
  );
};

export default ExpencesView;
