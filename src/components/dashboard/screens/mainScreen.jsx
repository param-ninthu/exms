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
  SplashTitle,
  ExpenseCard,
  ExpenseImage,
  ExpenseTitleContainer,
  ExpenseTitle,
  ExpenseSubTitle,
} from "./screenElements";
import { useSelector, useDispatch } from "react-redux";
import { updateExpense } from "../../../features/Expense";
import AddExpencesForm from "../popup/AddExpencesForm";
import AddIncomeForm from "../popup/AddIncomeForm";

import bills from "./../../../assets/icons/bills.png";
import food from "./../../../assets/icons/food.png";
import others from "./../../../assets/icons/others.png";
import rent from "./../../../assets/icons/rent.png";
import transport from "./../../../assets/icons/transport.png";

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

  const getIcon = (category) => {
    switch (category) {
      case "bills":
        return bills;
        break;
      case "food":
        return food;
        break;
      case "others":
        return others;
        break;
      case "rent":
        return rent;
        break;
      case "transport":
        return transport;
        break;
      default:
        return others;
    }
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
              {expense.length === 0 ? (
                <SplashTitle>No expenses</SplashTitle>
              ) : null}

              {expense.map((item) => (
                <ExpenseCard>
                  <ExpenseImage src={getIcon(item.category)} />
                  <ExpenseTitleContainer>
                    <ExpenseTitle>{item.exname}</ExpenseTitle>
                    <ExpenseSubTitle>{item.date}</ExpenseSubTitle>
                  </ExpenseTitleContainer>
                  <ExpenseTitle>Rs {item.amount} </ExpenseTitle>
                </ExpenseCard>
              ))}
            </CardContainerBody>
          </CardContainer>
        </DisplayExpenseContainer>
      </Container>
    </Container>
  );
};

export default MainScreen;
