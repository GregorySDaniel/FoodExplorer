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
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 48px;
  gap: 24px;
  
  @media(min-width: 1024px){
    flex-direction: row;
  }
  
  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    gap: 24px;
  }

  @media(min-width: 1024px){
    padding: 48px 10%;
  }
  
  a {
    font-size: 1.5rem;
    position: absolute;
    left: 10%;
    top: 48px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  
  img {
    margin-top: 52px;
    width: 16.5rem;
    height: 16.5rem;
    object-fit: contain;
  }

  h1{
    font-weight: 400;
  }

  p{
    text-align: center;
  }


`;

export const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const OrderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  gap: 12px;


  button{
    width: 100%;
    max-width: 22.5rem;
  }

`;

export const Select = styled.div`
  display: flex;
  gap: 12px;
`;