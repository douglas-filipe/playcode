import styled from "styled-components";

interface PropsSignupModal {
  openModalSignup: boolean;
}

export const Container = styled.div<PropsSignupModal>`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
  visibility: ${(props) => (props.openModalSignup ? "visible" : "hidden")};
  animation: ${(props) =>
    props.openModalSignup ? "animateBackground 0.1s" : "none"};

  @keyframes animateBackground {
    0% {
      opacity: 0;
    }
  }
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
    transform: ${(props) =>
      props.openModalSignup ? "scale(100%)" : "scale(10%, 10%)"};
    animation: ${(props) =>
      props.openModalSignup ? "animateModal 0.2s" : "none"};
    transition: 0.2s;

    @keyframes animateModal {
      0% {
        transform: scale(20%, 20%);
      }
      80% {
        transform: scale(120%, 120%);
      }
    }

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
      cursor: pointer;
      width: 230px;
      height: 36px;
      background: #2cb2a8;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 20px;

      :disabled {
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
        cursor: pointer;
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

  form input:-webkit-autofill,
  form input:-webkit-autofill:hover,
  form input:-webkit-autofill:focus,
  form textarea:-webkit-autofill,
  form textarea:-webkit-autofill:hover,
  form textarea:-webkit-autofill:focus,
  form select:-webkit-autofill,
  form select:-webkit-autofill:hover,
  form select:-webkit-autofill:focus {
    border: 0px solid #38304e;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #1c1825 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  form input:focus {
    background: transparent;
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
