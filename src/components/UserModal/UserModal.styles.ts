import styled from "styled-components";
import { IstylesPropsUserModal } from "./UserModal.types";

export const Container = styled.div<IstylesPropsUserModal>`
  position: absolute;
  background-color: blue;
  display: flex;
  flex-direction: column;
  top: 60px;
  width: 200px;
  font-size: 14px;
  background: #121018;
  box-shadow: 1px 2px 4px #000000;
  visibility: ${(props) => (props.openUserMenu ? "visible" : "hidden")};
  z-index: 99;
  a,
  p {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    cursor: pointer;
  }

  a:hover,
  p:hover {
    background: #1c1825;
  }

  @media (min-width: 768px) {
    top: 70px;
  }
`;
