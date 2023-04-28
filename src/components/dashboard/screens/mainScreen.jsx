import React from "react";
import {
  Container,
  ExpenseInfoContainer,
  CardContainer,
  IncomeInfoContainer,
  DisplayExpenseContainer,
  ChartContainer,
} from "./screenElements";

const MainScreen = () => {
  return (
    <Container $mode="main">
      <Container $mode="secondary">
        <Container $mode="report">
          <IncomeInfoContainer>
            <CardContainer>Income</CardContainer>
          </IncomeInfoContainer>
          <ExpenseInfoContainer>
            <CardContainer>Expense</CardContainer>
          </ExpenseInfoContainer>
        </Container>
        <Container $mode="chart">
          <ChartContainer>Chart</ChartContainer>
        </Container>
      </Container>
      <Container $mode="expenses">
        <DisplayExpenseContainer>Expenses List</DisplayExpenseContainer>
      </Container>
    </Container>
  );
};

export default MainScreen;
