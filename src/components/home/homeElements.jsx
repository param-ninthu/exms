import styled, { css } from "styled-components";
import { styles } from "../../resources/styles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${styles.fontColor};
  background-color: ${styles.primaryColor};
  ${(props) => {
    switch (props.$mode) {
      case "body":
        return css`
          width: 80%;
          display: grid;
          grid-template-columns: 50% 50%;
        `;

      case "main":
        return css`
          width: 100%;
          height: 100vh;
        `;
    }
  }}
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7%;
  background-color: ${styles.accentColor};
`;

export const Logo = styled.div`
  margin: 10px;
  display: flex;
  font-size: 30px;
  color: ${styles.fontColor};
  font-weight: 700;
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  margin: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  margin: 10px;
  border-radius: 5px;
  color: ${styles.fontColor};
  font-size: 15px;
  cursor: pointer;
  ${(props) => {
    switch (props.$mode) {
      case "signin":
        return css`
          background-color: transparent};
          border: 1px solid ${styles.borderColor};
        `;
      case "signup":
        return css`
          background-color: ${styles.secondaryColor};
        `;
    }
  }}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          width: 80%;
          height: 100vh;
        `;
    }
  }}
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  margin: 10px;
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          color: ${styles.fontColor};
        `;
      case "secondary":
        return css`
          color: ${styles.secondaryColor};
        `;
    }
  }}
`;

export const LinkR = styled(Link)`
  display: flex;
  column-gap: 20px;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${styles.dashboardPrimaryColor};
  text-decoration: none;
  color: ${styles.fontColor};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
