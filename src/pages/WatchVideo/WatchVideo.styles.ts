import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90vw;

  .loadingMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Loading {
      padding: 40px;
    }
  }

  .channelSubscribe {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    .channel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .channelInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h4 {
        font-weight: bold;
        font-size: 1.2rem;
      }
      h3 {
        color: #8e8e8e;
      }
      .photo {
        width: 40px;
        height: 40px;
        background: black;
        border-radius: 50%;
        img {
          border-radius: 50%;
        }
      }
    }

    .subscribe {
      margin: auto;
      cursor: pointer;
    }

    .subscribe button {
      margin: 15px auto;
      color: white;
      font-weight: bold;
      background: #ee2e31;
      border-radius: 2px;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
    }

    .subscribe .subscribeConfirm {
      background: #2d2f3d;
    }
  }

  .video {
    width: 100%;
    height: auto;
    background: black;
    video {
      width: 100%;
      height: auto;
    }
  }

  .videoDetails {
    display: flex;
    flex-direction: column;
    .titleDescription {
      h1 {
        font-weight: bold;
        font-size: 1.2rem;
      }
      p {
        font-weight: lighter;
        margin: 10px 0;
      }
      .barra {
        width: 200px;
        height: 0.5px;
        background: #7a7a7a;
        margin-bottom: 20px;
      }
    }
  }

  .reactionsViews {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    margin: 10px 0px;
    svg,
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media (min-width: 768px) {
    width: 700px;

    .channelSubscribe {
      flex-direction: row;
      padding-top: 150px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .subscribe {
        margin: 0px;
      }
      .subscribe button {
        padding: 10px 25px;
        font-size: 0.9rem;
      }
      .channel {
        .photo {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .channelInfo {
          align-items: flex-start;
        }
      }
    }
  }
`;
