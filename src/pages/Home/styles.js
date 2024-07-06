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


export const Banner = styled.div`
  display: flex;
  align-items: center;

  margin: 24px 0;
  background: linear-gradient(to right, #061a23, #01131c);
  width: 100%;
  max-width: 600px;
  height: 120px;
  border-radius: 3px;

  img{
    margin-top: -28px;
    margin-left: -24px;
  }

  h1{
    font-size: 16px;
  }

  p{
    font-size: 12px;
  }

`;
