import styled, { css } from "styled-components";
import { styles } from "../../resources/styles";

export const Container = styled.div`
  display: flex;
  ${(props) => {
    switch (props.$mode) {
      case "dashboard":
        return css`
          display: grid;
          grid-template-columns: 15% 85%;
          width: 100%;
          height: 100vh;
        `;
      case "wrapper":
        return css`
          display: grid;
          grid-template-rows: 5% 95%;
          width: 100%;
          height: 100vh;
        `;
      case "side":
        return css`
          flex-direction: column;
          width: 100%;
          height: 100vh;
          background-color: ${styles.accentColor};
        `;

      case "top":
        return css`
          width: 100%;
          height: 100%;
          background-color: ${styles.fontColor};
        `;

      case "body":
        return css`
          width: 100%;
          height: 100%;
        `;
    }
  }}
`;
