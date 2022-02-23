import styled from "styled-components";

export const Container = styled.main`
  background-color: #1d1c2a;
  display: flex;
  position: relative;
  .videosRecentsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
    margin-top: 70px;
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin-left: 280px;
  }

  @media (min-width: 1088px) {
    width: 70vw;
  }

  @media (min-width: 1440px) {
    width: 70vw;
    margin-left: 300px;
  }
`;
