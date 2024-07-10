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

  a:hover{
    transform: none;
  }

  h1{
    font-weight: 400;
  }

  .ingredients{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    gap: 20px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    padding: 8px 12px;
    border-radius: 8px;

  }

`;