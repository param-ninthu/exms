import styled, { css } from "styled-components";
import { styles } from "../../../resources/styles";

export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          display: grid;
          grid-template-columns: 75% 25%;
          width: 100%;
          overflow: hidden;
          column-gap: 10px;
          padding-bottom: 20px;
          /* background-color: ${styles.fontColorSecondary}; */
        `;

      case "report":
        return css`
          display: grid;
          grid-template-columns: 45% 45%;
          justify-content: space-between;
          align-items: center;
          column-gap: 10px;
          padding-left: 20px;
          padding-top: 20px;
        `;

      case "secondary":
        return css`
          display: grid;
          grid-template-rows: 40% 60%;
          row-gap: 10px;
        `;

      case "expenses":
        return css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          align-items: center;
          padding-top: 20px;
          margin-bottom: 20px;
        `;
      case "chart":
        return css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding-left: 20px;
          margin-bottom: 20px;

          /* background-color: brown; */
        `;
      case "table":
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
        `;
    }
  }}
`;

// export const AllExpensesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   overflow-y: auto;
// `;

export const IncomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
`;

export const ExpenseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  width: 100%;
  height: 100%;
  background-color: ${styles.dashboardPrimaryColor};
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const DisplayExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 98.5%;
  border-radius: 8px;
  background-color: ${styles.dashboardPrimaryColor};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 98%;
  height: 100%;
  background-color: ${styles.dashboardPrimaryColor};
`;

export const CardContainerTopbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const CardContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  background-color: ${styles.dashboardPrimaryColor};
  overflow-y: auto;

  ${(props) => {
    switch (props.$mode) {
      case "income":
        return css`
          justify-content: center;
        `;
    }
  }}
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${styles.tertiaryColor};
  margin-left: 10px;
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  background-color: ${styles.fontColorSecondary};
  color: ${styles.dashboardPrimaryColor};
  font-size: 1.5rem;
`;

export const ExpenseCard = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 40%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 80px;
  border-radius: 8px;
  margin-top: 10px;
  background-color: ${styles.dashboardPrimaryColor};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const ExpenseCardBottombar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 95%;
`;

export const ExpenseCardContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  height: 120px;
  width: 100%;
`;

export const SplashTitle = styled.h1`
  margin: 5px;
  font-size: 20px;
  font-weight: 700;
  color: ${styles.fontColor};
`;

export const SplashCard = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "null":
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 95%;
          height: 80px;
          border-radius: 8px;
          margin-top: 10px;
          background-color: ${styles.secondaryColor};
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        `;
      case "value":
        return css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(17deg, #9c4fd4, #68a797);
        `;
    }
  }}
`;

export const ExpenseImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

export const IncomeImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin: 5px;
`;

export const ExpenseTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${styles.fontColor};
  margin-left: 10px;
`;

export const ExpenseSubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${styles.fontColorSecondary};
  margin-top: 10px;
  margin-left: 10px;
`;

export const ExpenseTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: flex;
  width: 50%;
  height: 30px;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${styles.fontColor};
  background-color: ${styles.dashboardPrimaryColor};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 30px;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${styles.fontColor};
  background-color: ${styles.fontColorSecondary};
  cursor: pointer;
  ${(props) => {
    switch (props.$mode) {
      case "table":
        return css`
          width: 20%;
        `;
    }
  }}
`;

//////////////////Styels for table////////////////////////////////////////////

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const TRow = styled.tr`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const THeading = styled.th`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${styles.fontColor};
  width: 200px;
  height: 40px;
  background-color: ${styles.secondaryColor};
  margin-right: 5px;
  padding-left: 20px;
`;

export const TData = styled.td`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  height: 40px;
  background-color: ${styles.tertiaryColor};
  margin-right: 5px;
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
  width: 100%;
`;
