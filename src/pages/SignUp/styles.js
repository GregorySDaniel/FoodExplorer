import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 85vh;

  padding: 50px;
  gap: 64px;

  a{
    font-size: 16px;
  }

  h1{
    font-weight: 400;
  }

  @media(min-width: 1024px){
    flex-direction: row;
    justify-content: space-evenly;
  }
  .desktop{
    @media (max-width:1024px){
      display: none;
    }
  }

`;

