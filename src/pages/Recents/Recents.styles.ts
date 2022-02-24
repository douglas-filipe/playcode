import styled from "styled-components";

export const Container = styled.main`
  background-color: #1d1c2a;
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px 0;
  }

  .videosRecentsList {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin-left: 280px;
    .videosRecentsList {
      align-items: center;
      width: 100%;
    }
  }

  @media (min-width: 1088px) {
    width: 70vw;
  }

  @media (min-width: 1440px) {
    width: 70vw;
    margin-left: 300px;

  }
`;
