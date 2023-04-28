import styled, { css } from "styled-components";
import { styles } from "../../resources/styles";

// dashboard styles
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
          grid-template-rows: 7% 93%;
          width: 100%;
        `;
      case "side":
        return css`
          flex-direction: column;
          width: 100%;
          background-color: ${styles.accentColor};
        `;
      case "top":
        return css`
          width: 100%;
          background-color: ${styles.fontColor};
        `;
      case "body":
        return css`
          width: 100%;
          background-color: ${styles.fontColor};
        `;
    }
  }}
`;

// Sidenav bar styles
export const SidnavContainer = styled.div`
  display: gird;
  grid-template-rows: 10% 50% 40%;
  width: 100%;
  background-color: ${styles.accentColor};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${styles.fontColorSecondary};
  font-weight: 700;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  column-gap: 20px;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${styles.accentColor};
  color: ${styles.fontColor};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 40px;

  &:hover {
    background-color: ${styles.fontColor};
    color: ${styles.accentColor};
    border-right: 2px solid ${styles.secondaryColor};
    border-radius: 7px;
  }
`;

// Topbar styles
export const TopbarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  /* background-color: ${styles.accentColor}; */
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${styles.secondaryColor};
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;
