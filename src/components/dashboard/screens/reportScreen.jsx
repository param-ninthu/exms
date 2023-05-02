import React from "react";
import {
  TBody,
  TData,
  THead,
  THeading,
  TRow,
  Table,
  TableContainer,
  SplashTitle,
  Container,
  ButtonContainer,
  Button,
} from "./screenElements";
import { useSelector, useDispatch } from "react-redux";

import generatePDF from "../report/generatePDF";

const ReportScreen = () => {
  const expense = useSelector((state) => state.expenses.value);

  return (
    <Container $mode="table">
      <ButtonContainer>
        <Button
          $mode="table"
          onClick={() => {
            generatePDF(expense);
          }}
        >
          Generate Report
        </Button>
      </ButtonContainer>
      <TableContainer>
        <Table>
          <THead>
            <TRow>
              <THeading>Expense name</THeading>
              <THeading>Date</THeading>
              <THeading>Amount</THeading>
              <THeading>Category</THeading>
              <THeading>Notes</THeading>
            </TRow>
          </THead>
          <TBody>
            {expense.length === 0 ? (
              <SplashTitle>You currently have no expenses created</SplashTitle>
            ) : null}

            {expense.map((item) => (
              <TRow>
                <TData>{item.exname}</TData>
                <TData>{item.date}</TData>
                <TData>Rs {item.amount}</TData>
                <TData>{item.category}</TData>
                <TData>{item.notes}</TData>
              </TRow>
            ))}
          </TBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReportScreen;
