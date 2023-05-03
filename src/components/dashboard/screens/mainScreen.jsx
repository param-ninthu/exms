import React, { useState, useEffect } from "react";
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
  ExpenseCardContainer,
  ExpenseCardBottombar,
  Form,
  Input,
  Button,
} from "./screenElements";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import {
  updateExpense,
  removeExpense,
  archiveExpense,
} from "../../../features/Expense";
import AddExpencesForm from "../popup/AddExpencesForm";
import AddIncomeForm from "../popup/AddIncomeForm";
import ExpencesView from "../popup/ExpencesView";
import Chart from "react-apexcharts";

import bills from "./../../../assets/icons/bills.png";
import food from "./../../../assets/icons/food.png";
import others from "./../../../assets/icons/others.png";
import rent from "./../../../assets/icons/rent.png";
import transport from "./../../../assets/icons/transport.png";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { green, red } from "@mui/material/colors";

const MainScreen = () => {
  const dispatch = useDispatch();

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
  const expense = useSelector((state) => state.expenses.value) || [];
  const income = useSelector((state) => state.income.value) || [];

  const [userExpense, setUserExpense] = useState();

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
  // const onSubmit = (data) => {
  //   dispatch(updateExpense(data));
  // }; // your form submit function which will invoke after successful validation

  const [series, setSeries] = useState([]);
  const donutOptions = {
    options: {},
    series: [4400, 5500, 4100, 107, 10005],
    lables: ["Food", "Rent", "Travells", "Bills", "Others"],
  };

  // useEffect(() => {
  //   const newSeries = [];
  //   series.map((s) => {
  //     const data = s.data.map(() => {
  //       return Math.floor(Math.random() * (180 - min + 1)) + min;
  //     });
  //     newSeries.push({ data, name: s.name });
  //   });
  //   setSeries(newSeries);
  // }, []);

  const chartOptions = {
    series: [
      {
        name: "Expense",
        data: [50000, 2000, 450, 885, 3465, 6123, 1000, 4000],
      },
      {
        name: "Income",
        data: [50000, 20000, 4500, 8815, 1000, 6000, 1000, 4000],
      },
    ],
    options: {
      colors: ["#008FFB", "#00E396", "#fb0b12", "#CED4DC"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: true,
        background: {
          foreColor: "white",
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          colors: ["#008FFB", "#00E396"],
          useSeriesColors: false,
        },
      },
      grid: {
        show: true,
      },
      tooltip: {
        fillSeriesColor: "true",
        x: { show: true },
      },
    },
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
              <CardContainerBody>
                {" "}
                <Chart
                  series={donutOptions.series}
                  options={donutOptions.options}
                  type="donut"
                  width="100%"
                />
              </CardContainerBody>
            </CardContainer>
          </ExpenseInfoContainer>
        </Container>
        <Container $mode="chart">
          <ChartContainer>
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="area"
              height="100%"
            />
          </ChartContainer>
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
              {expense && expense.length === 0 ? (
                <SplashTitle>No expenses</SplashTitle>
              ) : null}

              {expense.map((item) => (
                <>
                  <>
                    {/* {activeExView ? (
                      <ExpencesView toggle={toggleView} item={item.amount} />
                    ) : null} */}
                    {/* onClick={toggleView} */}
                  </>
                  <ExpenseCardContainer>
                    <ExpenseCard>
                      <ExpenseImage src={getIcon(item.category)} />
                      <ExpenseTitleContainer>
                        <ExpenseTitle>{item.exname}</ExpenseTitle>
                        <ExpenseSubTitle>{item.date}</ExpenseSubTitle>
                      </ExpenseTitleContainer>
                      <ExpenseTitle>Rs {item.amount} </ExpenseTitle>
                    </ExpenseCard>
                    <ExpenseCardBottombar>
                      {/* <DriveFileRenameOutlineIcon /> */}
                      <DeleteIcon
                        sx={{ color: red[500] }}
                        onClick={() => {
                          dispatch(removeExpense({ id: item.id }));
                        }}
                      />
                      <ArchiveIcon
                        sx={{ color: green[500] }}
                        onClick={() => {
                          dispatch(archiveExpense({ id: item.id }));
                        }}
                      />
                    </ExpenseCardBottombar>
                  </ExpenseCardContainer>
                  <Form>
                    <Input
                      defaultValue={item.amount}
                      onChange={(e) => {
                        setUserExpense(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        dispatch(
                          updateExpense({
                            id: item.id,
                            amount: userExpense,
                          })
                        );
                      }}
                    >
                      Update
                    </Button>
                  </Form>
                </>
              ))}
            </CardContainerBody>
          </CardContainer>
        </DisplayExpenseContainer>
      </Container>
    </Container>
  );
};

export default MainScreen;
