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
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  background-color: ${styles.dashboardPrimaryColor};
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