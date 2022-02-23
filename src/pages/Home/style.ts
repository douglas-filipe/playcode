import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-model {
      grid-area: login-model;

      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 1rem;

      font-size: 1.1rem;
      span {
        margin: 0 2px 0 10px;
      }
      svg {
        color: var(--contrast);
        font-size: 1.2rem;
      }
      .user-icon {
        font-size: 2rem;
      }
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
        top: 10px;
        margin-left: 5rem;
        justify-content: flex-start;
      }

      .login-model {
        top: 40px;
        right: 10px;
        span {
          cursor: pointer;
        }

        font-size: 1.5rem;
        svg {
          cursor: pointer;
        }
        .user-icon {
          font-size: 3rem;
        }
      }
      .content-boxI {
        span {
          margin-left: 5rem;
          font-size: 2rem;
        }
      }
      .content-boxII {
        span {
          margin-left: 5rem;
          font-size: 2rem;
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