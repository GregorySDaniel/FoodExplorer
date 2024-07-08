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

  @media(min-width: 1024px){
    gap: 36px;
    padding: 24px 10%;
  } 

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

  @media(min-width: 1024px){
    max-width: 1440px;
    height: 260px;
    margin-top: 128px;
    justify-content: center;
  } 

  img{
    margin-top: -4px;
    margin-left: -24px;
    width: 12rem;
    @media(min-width: 1024px){
      width: 600px;
      margin-top: -128px;
      margin-left: -64px;
    } 
  }

  h1{
    font-size: 1rem;

    @media(min-width: 1024px){
    font-size: 48px;
    font-weight: 500;
    } 
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  p{
    font-size: 1rem;
  }
`;
