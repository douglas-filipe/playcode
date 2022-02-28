import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      align-self: center;
      font-size: 4rem;
      color: var(--primary-light);
    }
  }

  .main-vid-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
    h1 {
      font-size: 2rem;
    }
    .form-container {
      width: 300px;
      height: fit-content;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .thumbnail {
        width: 300px;
        height: 100px;
        margin: 10px 0;

        background-color: #208078;
        cursor: pointer;
        :hover {
          background-color: var(--contrast);
        }
      }
      .video {
        width: 300px;
        height: 100px;
        margin: 10px 0;

        background-color: #208078;
        cursor: pointer;

        :hover {
          background-color: var(--contrast);
        }
      }
      .text-inputs {
        width: 310px;
        height: 340px;
        margin: 10px 0;
        /* background-color: #208078; */

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
      button {
        margin: 10px 0;

        width: 150px;
        height: 50px;

        border: none;
        border-radius: 10px;

        background-color: #208078;
        color: var(--primary-light);

        font-size: 1.2rem;
        cursor: pointer;

        :hover {
          background-color: var(--contrast);
        }
      }
    }
  }

  @media (min-width: 760px) {
    label {
      svg {
        font-size: 8rem;
      }
    }
    .main-vid-content {
      margin-top: 100px;
      h1 {
        font-size: 2rem;
      }
      .form-container {
        width: 740px;
        .thumbnail {
          width: 736px;
          height: 227px;
          margin: 10px 0;
        }
        .video {
          width: 400px;
          height: 340px;
          margin: 10px 0;
          margin: 0 0 0 15px;
        }
        .text-inputs {
          width: 310px;
          height: 340px;
          margin: 0px 10px 10px 0;
        }
        button {
          margin: 10px 0;
          width: 150px;
          height: 50px;
        }
      }
    }
  }
`;

export const FormInput = styled(TextField)`
  width: 100%;

  div {
    color: var(--contrast);
    border: 1px solid var(--contrast);

    fieldset {
      all: unset;
    }
  }
`;
