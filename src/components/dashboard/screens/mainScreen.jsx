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
import ExpencesView from "../popup/ExpencesView";

import bills from "./../../../assets/icons/bills.png";
import food from "./../../../assets/icons/food.png";
import others from "./../../../assets/icons/others.png";
import rent from "./../../../assets/icons/rent.png";
import transport from "./../../../assets/icons/transport.png";

const MainScreen = () => {
  const [activeExForm, setActiveExForm] = useState(false);
  const [activeInForm, setActiveInForm] = useState(false);
  const [activeExView, setActiveExView] = useState(false);
  var totalIncome = 0;
  var totalExpense = 0;

  const toggleEx = () => {
    setActiveExForm(!activeExForm);
  };

  const toggleIn = () => {
    setActiveInForm(!activeInForm);
  };

  const toggleView = () => {
    setActiveExView(!activeExView);
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
      case "travel":
        return transport;
        break;
      default:
        return others;
    }
  };
  const expense = useSelector((state) => state.expenses.value);
  const income = useSelector((state) => state.income.value);
  const refresh = () => {
    {
      income.map((item) => (totalIncome = totalIncome + parseInt(item.amount)));
    }
    {
      expense.map(
        (item) => (totalExpense = totalExpense + parseInt(item.amount))
      );
    }
    totalIncome = totalIncome - totalExpense;
  };

  refresh();

  return (
    <Container $mode="main">
      {activeExForm ? <AddExpencesForm toggle={toggleEx} /> : null}
      {activeInForm ? <AddIncomeForm toggle={toggleIn} /> : null}
      {activeExView ? <ExpencesView toggle={toggleView} /> : null}

      <Container $mode="secondary">
        <Container $mode="report">
          <IncomeInfoContainer>
            <CardContainer>
              <CardContainerTopbar>
                <CardTitle>Current Balance</CardTitle>
                <CardButton onClick={toggleIn}>+</CardButton>
              </CardContainerTopbar>
              <CardContainerBody>
                {" "}
                {income.length === 0 ? (
                  <SplashTitle>Add Income</SplashTitle>
                ) : null}
                <SplashTitle>Rs {totalIncome}</SplashTitle>
              </CardContainerBody>
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
                <ExpenseCard onClick={toggleView}>
                  <ExpenseImage src={getIcon(item.category)} />
                  <ExpenseTitleContainer>
                    <ExpenseTitle>{item.exname}</ExpenseTitle>
                    <ExpenseSubTitle>{item.date}</ExpenseSubTitle>
                  </ExpenseTitleContainer>
                  <ExpenseTitle>Rs {item.amount} </ExpenseTitle>
                  {localStorage.setItem("expense", JSON.stringify(item.exname))}
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
