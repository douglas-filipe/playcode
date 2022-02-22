import styled from "styled-components";

export const Container = styled.div`
  background-color: #1d1c2a;
  width: 100vw;
  height: 100vh;
  position: fixed;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 290px;
    margin: 100px auto;
    background: #121018;
    border-radius: 10px;
    position: relative;

    .closeModalLogin {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(10px, -10px);
      color: #af1b3f;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    .btnSubmit {
      width: 230px;
      height: 36px;
      background: #2cb2a8;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 20px;

      :disabled{
        background-color: #202020;
      }
    }

    h1 {
      font-weight: 500;
      font-size: 20px;
      color: white;
      margin: 25px 0px;
    }

    a,
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: #838383;
      text-decoration: none;
      margin-bottom: 10px;
      span {
        color: #6cd4ff;
      }
    }
    p {
      margin-bottom: 30px;
    }

    div {
      background: #1c1825;
      box-sizing: border-box;
      border-radius: 6px;
      width: 250px;
      height: 36px;
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      svg {
        color: #4e879e;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 6px;
      }
      :focus-within {
        box-shadow: 0px 0px 0px 1px #6cd4ff;
        svg {
          color: #6cd4ff;
        }
      }
      input {
        background: none;
        border: none;
        outline: none;
        color: white;
        font-size: 16px;
        font-weight: 200;
        ::placeholder {
          color: #838383;
        }
      }
    }
  }
  //Responsividade
  @media (min-width: 768px) {
    form {
      width: 363px;
      div {
        width: 288px;
      }

      .btnSubmit {
        width: 249;
      }

      .closeModalLogin {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(25px, -25px);
        color: #af1b3f;
        width: 50px;
        height: 50px;
      }
    }
  }
`;
