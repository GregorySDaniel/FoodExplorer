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

export const Main = styled.main`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 24px;
  gap: 20px;
`;