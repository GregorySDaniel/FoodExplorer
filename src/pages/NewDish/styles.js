import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  width: 100%;
  height: 100vh;

  grid-template-rows: 105px auto 72px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  grid-area: content;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  padding: 8px 28px;


  h1{
    font-weight: 400;
  }
`;