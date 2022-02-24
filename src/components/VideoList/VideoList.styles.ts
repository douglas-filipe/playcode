import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 285px;
  height: 228px;
  .title {
    color: white;
    margin-top: 11px;
    font-weight: 600;
    font-size: 18px;
  }

  .channel {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    h4 {
      color: white;
      font-weight: 500;
    }
    div {
      img {
        border-radius: 50%;
      }
      width: 34px;
      height: 34px;
      background: white;
      border-radius: 50%;
    }
  }

  .thumb {
    margin-top: 19px;
    width: 100%;
    height: 100%;
    background: red;
    position: relative;

    .img {
      width: 100%;
      height: 100%;
      background-color: black;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .downThumb {
      position: absolute;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      bottom: 0;
      width: 100%;
      height: 28px;

      svg {
        color: white;
        width: 20px;
        height: 20px;
      }

      .views {
        display: flex;
        align-items: center;
        padding-left: 11px;
        .viewIcon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          padding-left: 7px;
        }
      }

      .reactions {
        display: flex;
        align-items: center;
        padding-right: 11px;
        p {
          padding-left: 7px;
        }
      }
    }
  }
`;
