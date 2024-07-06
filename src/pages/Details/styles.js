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

  padding: 48px;
  gap: 24px;
  
  a {
    font-size: 24px;
    position: absolute;
    left: 48px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  
  img {
    margin-top: 52px;
    width: 264px;
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
    max-width: 360px;
  }

`;

export const Select = styled.div`
  display: flex;
  gap: 12px;
`;