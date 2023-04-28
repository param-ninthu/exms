import React, { useState } from "react";
import {
  Container,
  ExpenseInfoContainer,
  CardContainer,
  IncomeInfoContainer,
  DisplayExpenseContainer,
  ChartContainer,
  CardContainerTopbar,
  CardContainerBody,
  CardTitle,
  CardButton,
} from "./screenElements";

import AddExpencesForm from "../popup/AddExpencesForm";
import AddIncomeForm from "../popup/AddIncomeForm";

const MainScreen = () => {
  const [activeExForm, setActiveExForm] = useState(false);
  const [activeInForm, setActiveInForm] = useState(false);

  const toggleEx = () => {
    console.log("toggleEx");
    setActiveExForm(!activeExForm);
  };

  const toggleIn = () => {
    console.log("toggleIn");
    setActiveInForm(!activeInForm);
  };

  return (
    <Container $mode="main">
      {activeExForm ? <AddExpencesForm toggle={toggleEx} /> : null}
      {activeInForm ? <AddIncomeForm toggle={toggleIn} /> : null}
      <Container $mode="secondary">
        <Container $mode="report">
          <IncomeInfoContainer>
            <CardContainer>
              <CardContainerTopbar>
                <CardTitle>Current Balance</CardTitle>
                <CardButton onClick={toggleIn}>+</CardButton>
              </CardContainerTopbar>
              <CardContainerBody>Hello</CardContainerBody>
            </CardContainer>
          </IncomeInfoContainer>
          <ExpenseInfoContainer>
            <CardContainer>
              <CardContainerTopbar>
                <CardTitle>Total Expenses</CardTitle>
              </CardContainerTopbar>
              <CardContainerBody>Hello</CardContainerBody>
            </CardContainer>
          </ExpenseInfoContainer>
        </Container>
        <Container $mode="chart">
          <ChartContainer>Chart</ChartContainer>
        </Container>
      </Container>
      <Container $mode="expenses">
        <DisplayExpenseContainer>
          <CardContainer>
            <CardContainerTopbar>
              <CardTitle>Expense details</CardTitle>
              <CardButton onClick={toggleEx}>+</CardButton>
            </CardContainerTopbar>
            <CardContainerBody>Hello</CardContainerBody>
          </CardContainer>
        </DisplayExpenseContainer>
      </Container>
    </Container>
  );
};

export default MainScreen;
