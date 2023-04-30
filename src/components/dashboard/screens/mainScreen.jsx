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
import { useSelector, useDispatch } from "react-redux";
import { updateExpense } from "../../../features/Expense";
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

  const expense = useSelector((state) => state.expenses.value);

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
            <CardContainerBody>
              {expense.length === 0 ? <p>No expenses</p> : null}

              {expense.map((item) => (
                <div>
                  <p>{item.exname}</p>
                  <p>{item.date}</p>
                  <p>{item.amount}</p>
                  <p>{item.notes}</p>
                </div>
              ))}
            </CardContainerBody>
          </CardContainer>
        </DisplayExpenseContainer>
      </Container>
    </Container>
  );
};

export default MainScreen;
