import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 2px;
  right: 0;

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
  @media screen {
  }
  @media (min-width: 760px) {
    right: 10px;
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
`;
