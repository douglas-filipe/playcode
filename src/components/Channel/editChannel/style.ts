import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  .maincontent {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    span {
      font-size: 2rem;
      font-weight: bold;
    }
    .profile-picture {
      width: 180px;
      height: 180px;

      margin: 10px;

      border-radius: 50%;

      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      background-color: var(--primary-light);
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .camera {
        font-size: 4rem;
        margin: -60px 0 0 70px;
      }
    }
  }
  @media (min-width: 760px) {
    .maincontent {
      .profile-picture {
        width: 280px;
        height: 280px;
        margin: 40px;
      }
      form {
        .camera {
          margin: -150px 0 0 150px;
        }
      }
    }
  }
`;

export const InputBox = styled(Box)`
  width: 250px;
  height: 40px;

  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .field {
    width: 80%;
    max-height: 60px;
    background-color: var(--primary-dark);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
      color: var(--contrast);
      padding-left: 10px;
    }
    :hover {
      border: 1px solid var(--contrast);
    }
    :focus-within {
      border: 1px solid var(--contrast);
    }
  }

  button {
    width: 80px;
    height: 30px;
    background-color: var(--yellow);
    color: var(--primary-dark);

    border: none;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
  }
  .redBtn {
    background-color: var(--red);
    color: var(--primary-light);
  }

  @media (min-width: 760px) {
    width: 300px;

    button {
      height: 40px;
      width: 110px;
    }
    .field {
      height: 45px;
      border-radius: 10px;
      svg {
        padding-left: 15px;
      }
    }
  }
  @media (min-width: 960px) {
    width: 430px;
  }
`;
//MUI TEXTFIELD
export const InputField = styled(TextField)`
  width: 90%;
  input {
    padding: 5px 5px;
  }
  div {
    color: var(--primary-light);

    fieldset {
      all: unset;
    }
  }
  @media (min-width: 760px) {
    input {
      padding: 9px 15px;
    }
  }
`;

//MUI BTN
