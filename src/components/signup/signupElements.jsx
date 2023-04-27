import styled, { css } from "styled-components";
import { styles } from "../../resources/styles";

export const Container = styled.div`
  color: ${styles.fontColor};
  background-color: ${styles.primaryColor};
  ${(props) => {
    switch (props.$mode) {
      case "body":
        return css`
          width: 80%;
          display: grid;

          grid-template-columns: 30% 70%;
        `;

      case "main":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        `;
    }
  }}
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 80%;
  height: 80%;
`;

export const InputContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  ${(props) => {
    switch (props.$mode) {
      case "wrapper":
        return css`
          display: flex;
          flex-direction: column;
          width: 100%;
        `;
      case "single":
        return css`
          display: grid;
          width: 100%;
          grid-template-columns: 100%;
          align-items: center;
          justify-content: left;
        `;

      case "double":
        return css`
          display: grid;
          width: 100%;
          grid-template-columns: 45% 45%;
          align-items: center;
          justify-content: space-between;
        `;
    }
  }}
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 20px;
  color: #000000;
  padding-left: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  ${(props) => {
    switch (props.$mode) {
      case "single":
        return css`
          font-size: 18px;
        `;

      case "double":
        return css`
          font-size: 18px;
        `;
    }
  }}
`;

export const ButtonContainer = styled.div`
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: left;
  width: 100%;
  /* border: 1px solid #fff; */
`;

export const Button = styled.button`
  width: 47%;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 20px;
  color: #ffffff;
  background-color: ${styles.secondaryColor};
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${styles.tertiaryColor};
  }
`;
