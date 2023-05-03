import styled, { css } from "styled-components";
import { styles } from "../../resources/styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  color: ${styles.fontColor};
  background-color: ${styles.primaryColor};
  ${(props) => {
    switch (props.$mode) {
      case "body":
        return css`
          width: 80%;
          display: grid;
          margin-top: 10%;
          grid-template-columns: 50% 30%;
        `;

      case "main":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
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
  justify-content: center;
  width: 80%;
  height: 80%;
`;

export const InputContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  ${(props) => {
    switch (props.$mode) {
      case "wrapper":
        return css`
          display: flex;
          flex-direction: column;
          width: 100%;
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
  font-size: 16px;
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
  margin-top: 15px;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;
  /* border: 1px solid #fff; */
`;

export const Button = styled.button`
  width: 104%;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: pointer;

  ${(props) => {
    switch (props.$mode) {
      case "casual":
        return css`
          margin-top: 20px;
          margin-bottom: 10px;
          background-color: ${styles.secondaryColor};
          &:hover {
            background-color: ${styles.tertiaryColor};
          }
        `;
      case "google":
        return css`
          display: flex;
          gap: 10px;
          background-color: ${styles.accentColor};
          font-size: 15px;
        `;
    }
  }}
`;
export const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Info = styled.h1`
  color: ${styles.fontColor};
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const PasswordField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
`;

export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 15px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-left: 10px;
  background-color: transparent;
`;

export const AccountInfo = styled.h1`
  color: ${styles.fontColor};
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;
export const LinkA = styled(Link)`
  text-decoration: none;
  color: ${styles.secondaryColor};
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${styles.tertiaryColor};
  }
`;
