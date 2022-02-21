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
        margin-left: 5rem;
        justify-content: flex-start;
      }

      .login-model {
        padding: 0 2rem 0;
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

//SIDEMENU BODY
export const MenuContainer = styled.div`
  width: 50px;
  height: 50px;
  z-index: 1;

  position: fixed;
  inset: 0;

  .logoContainer {
    padding: min(10vh, 1.5rem) 2rem;
    img {
      width: 100px;
      height: 100px;
      margin: 20px 0;
    }
  }
  a {
    color: var(--primary-light);
  }

  .navbar {
    padding: 1rem;
    font-size: 2rem;
    a {
      color: var(--contrast);
    }
  }
  .navopen {
    display: block;
  }

  .nav-menu {
    width: 180px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    background-color: var(--second-dark);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.31));

    li {
      list-style: none;
    }

    position: fixed;
    top: 0;
    left: -200%;
    transition: 850ms;
  }
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .navbar-toggle {
    position: absolute;
    padding: 0.5rem;
    font-size: 2rem;
    top: 0;
    left: 4em;
    a {
      color: var(--contrast);
    }
  }
  .nav-text {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 8px 0px 8px 0px;

    a {
      width: 95%;
      height: 100%;
      text-decoration: none;
      font-size: 1.15rem;

      display: flex;
      align-items: center;

      padding: 0 20px;
      svg {
        margin-right: 20px;
      }
    }
    :hover {
      background-color: var(--hover);
      a {
        color: var(--contrast);
      }
    }
  }
  .nav-menu-items {
    width: 100%;
  }
  @media (min-width: 760px) {
    .nav-menu {
      left: 0%;
      width: 250px;
    }
    .nav-menu-items {
      a {
        margin-left: 40px;
        font-size: 1.3rem;
      }
    }
    .logoContainer {
      margin-left: 40px;
    }
    .navbar {
      display: none;
    }
    .navbar-toggle {
      display: none;
    }
  }
`;

//VIDEO CARDS COMPONENT
export const VideoContainer = styled.div`
  width: 200px;
  height: 241px;

  background-color: rosybrown;
`;
