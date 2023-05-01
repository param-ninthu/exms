import styled, { css } from "styled-components";
import { styles } from "../../../resources/styles";
export const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 35%;
  z-index: 1000;
  width: 30%;
  height: 85%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none; */
  ${(props) => {
    switch (props.$mode) {
      case "exview":
        return css`
          display: grid;
          grid-template-columns: 20% 60% 20%;
          max-width: 70%;
          max-height: 20%;
          top: 35%;
        `;
    }
  }}

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
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

export const Select = styled.select`
  width: 104%;
  height: 33px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  font-size: 16px;
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
  font-size: 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  font-size: 16px;
  color: #000000;
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  font-size: 16px;
  color: #000000;
  padding-top: 5px;
  padding-left: 10px;
  resize: none;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 60%;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-around;
`;

// export const Container = styled.div`
//   position: fixed;
//   top: 5%;
//   left: 35%;
//   z-index: 1000;
//   width: 30%;
//   height: 85%;
//   background-color: #fff;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   /* transform: translate(-50%, -50%);
//   transition: all 0.3s ease-in-out;
//   opacity: 0;
//   pointer-events: none; */
//   ${(props) =>
//     props.active &&
//     css`
//       opacity: 1;
//       pointer-events: all;
//     `}
// `;
