import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  cursor: pointer;
  .img {
    width: 25px;
    height: 25px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
