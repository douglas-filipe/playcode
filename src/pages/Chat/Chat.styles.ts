import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;

  .loadingMessage {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Loading {
      padding: 40px;
    }
  }

  form {
    width: 300px;
    margin: auto;
    height: 67px;
    background-color: #333149;
    border: 0.5px solid #55527a;
    display: flex;
    div {
      width: 0.5px;
      background: #55527a;
      height: 100%;
      margin-right: 20px;
    }
    input {
      width: 80%;
      height: 100%;
      border: none;
      background-color: transparent;
      outline: none;
      padding-left: 10px;
      color: white;
      font-size: 1.2rem;
    }
    button {
      border: none;
      background-color: transparent;
      color: white;
      margin-right: 10px;
      cursor: pointer;
      :disabled {
        svg {
          filter: brightness(0.8);
        }
      }
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .Room {
    height: 63px;
    background: #55527a;
    font-size: 18px;
    font-weight: 600;
    line-height: 63px;
    text-align: center;
  }

  .Messages {
    width: 300px;
    height: 500px;
    overflow-y: auto;
    background-color: #2a293d;
    margin: 20px auto 0px auto;
    border: 0.5px solid #55527a;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 10px; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #1c2230; /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #0e1222; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }

  .messageUser {
    padding: 10px 15px 0 15px;
    .profileUser {
      display: flex;
      align-items: center;
      gap: 6px;
      .photo {
        width: 40px;
        height: 40px;
        font-weight: 600;
        color: white;
        background: #2cb2a8;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.3rem;
      }
    }

    .messageInfo {
      background-color: #333149;
      padding: 10px;
      width: 200px;
      margin: 10px 0px 20px 0px;
      border-radius: 0px 6px 6px 6px;
    }
  }

  .Owner {
    position: relative;
    text-align: right;

    .profileUser {
      display: none;
      align-items: right;
      gap: 6px;
    }

    .messageInfo {
      background-color: #5299d3;
      padding: 10px;
      width: 200px;
      margin: 10px 0px 20px 0px;
      border-radius: 0px 6px 6px 6px;
      color: black;
      transform: translateX(25%);
      word-break: break-all;
    }
  }

  @media (min-width: 768px) {
    form {
      width: 700px;
      input {
        width: 90%;
      }
    }
    .Messages {
      width: 700px;
      height: 600px;
    }
    .Owner {
      .messageInfo {
        background-color: #5299d3;
        padding: 10px;
        width: 200px;
        margin: 10px 0px 20px 0px;
        border-radius: 0px 6px 6px 6px;
        color: black;
        transform: translateX(200%);
        word-break: break-all;
      }
    }
  }
`;
