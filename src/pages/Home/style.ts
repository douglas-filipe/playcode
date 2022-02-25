import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

//HOME PAGE BODY

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--backgroud-color);
  color: var(--primary-light);

  display: flex;

  .main-box {
    flex-grow: 1;

    display: grid;
    gap: 10px;
    grid-template: 0.5fr 0.5fr 2fr 2fr / 1fr 1fr;

    grid-template-areas:
      " login-model login-model"
      " search search"
      " content-boxI content-boxI"
      " content-boxII content-boxII";

    .search {
      grid-area: search;
      margin: 70px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-model {
      grid-area: login-model;
    }
    .content-boxI {
      grid-area: content-boxI;

      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        color: var(--contrast);
        font-size: 2rem;
      }
      span {
        margin-left: 1.5rem;
        align-self: flex-start;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .content-boxII {
      grid-area: content-boxII;

      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        color: var(--contrast);
        font-size: 2rem;
      }
      span {
        margin-left: 1.5rem;
        align-self: flex-start;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
  @media (min-width: 760px) {
    display: grid;
    gap: 10px;
    grid-template: 1fr 2fr 2fr / 2fr 4fr 4fr;

    grid-template-areas:
      "side-menu main-box main-box"
      "side-menu main-box main-box"
      "side-menu main-box main-box";

    .side-menu {
      grid-area: side-menu;
      overflow: auto;
      min-width: 250px;
    }
    .main-box {
      grid-area: main-box;
      grid-template: 1fr 2fr 2fr / 3fr 1fr;
      grid-template-areas:
        " search login-model"
        " content-boxI content-boxI"
        " content-boxII content-boxII";

      .search {
        margin: 0;
        top: 10px;
        margin-left: 1.1rem;
        justify-content: flex-start;
      }

      .content-boxI {
        section {
          width: 100%;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        span {
          font-size: 2rem;
        }
      }
      .content-boxII {
        span {
          font-size: 2rem;
        }
        section {
          width: 100%;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
`;

//MUI HOME
export const InputBox = styled(Box)`
  width: 280px;
  height: 40px;
  border-radius: 15px;

  background-color: var(--hover);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .icon {
    color: var(--contrast);
    width: 50px;
    height: inherit;
    background-color: var(--second-dark);
    font-size: 1.5rem;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 760px) {
    width: 300px;
  }
  @media (min-width: 960px) {
    width: 430px;
  }
`;
//MUI TEXTFIELD
export const InputField = styled(TextField)`
  width: 90%;
  div {
    color: var(--primary-light);

    fieldset {
      all: unset;
    }
  }
`;

//MUI BUTTON

export const MuiButton = styled(Button)``;
