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
  position: relative;
  justify-content: space-between;
  
  padding: 6rem 24px;
  gap: 20px;
  
  @media(min-width: 1024px){
    align-items: start;
    padding: 6rem 10%;
    flex-direction: row;
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

  .pressed{
    background-color: rgba(255, 255, 255, 0.1);
  }

  h1{
    margin-bottom: 1rem;
  }

  div {
      width: 100%;
      height: 80px;
      border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
      border-radius: 12px 12px 0 0;
      display: flex;

      > section{
        border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .5rem;
      }
    }
  


  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 33rem;
    height: 23rem;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    border-radius: 0 0 12px 12px;

    @media(max-width: 1024px){
    width: 20rem;
    height: 14rem;
    }

    img{
      @media(max-width: 1024px){
      width: 35%;
      height: 50%;
      }
    }
  }
`;