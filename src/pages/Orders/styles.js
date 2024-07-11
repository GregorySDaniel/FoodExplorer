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
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  
  padding: 24px;
  gap: 20px;

  @media(min-width: 1024px){
    padding: 6rem 10%;
  }

  a {
    font-size: 1.5rem;
    position: absolute;
    left: 10%;
    top: 48px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  h1{
    font-weight: 400;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 33rem;
    height: 28rem;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    border-radius: 12px;
  }
`;