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
  justify-content: center;
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
  font-size: 17px;
  color: #000000;
  padding-left: 10px;
`;

export const Select = styled.select`
  width: 104%;
  height: 33px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 17px;
  color: #000000;
  padding-left: 10px;
`;

export const Option = styled.option`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
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
  align-items: center;
  justify-content: center;
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

export const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const AccountInfo = styled.h1`
  color: ${styles.fontColor};
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const Link = styled.a`
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

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 100px;
  background-color: transparent;
  color: ${styles.primaryColor};
  margin-top: 10px;
`;

export const ImageUploadContainer = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${styles.secondaryColor};
  border: 1px dashed ${styles.secondaryColor};
  content: "Select Profile";
  cursor: pointer;
  -webkit-user-select: none;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
