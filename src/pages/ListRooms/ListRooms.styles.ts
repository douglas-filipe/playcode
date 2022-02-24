import styled from "styled-components";

export const Container = styled.main`
  background-color: #323149;
  padding: 10px;
  width: 80%;
  margin: auto;
  height: 301px;
  margin-top: 100px;
  h1{
    padding: 20px 0px;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
  }
  .listRooms {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  @media(min-width: 768px){
    margin-top: 150px;
  }
`;
