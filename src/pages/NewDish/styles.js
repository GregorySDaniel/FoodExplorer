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

  @media(min-width: 1024px){
    padding: 24px 10%;
  } 


  .divfile{
    display: flex;
    font-family: 'Poppins', serif;
    font-size: .9rem;
    border-radius: 8px;
    padding: 1.5rem 0;
    background-color: ${({theme})=>theme.COLORS.DARK_800};
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    border: 0;
    position: relative;
    min-width: 14rem;
    width: 100%;

    >svg {
      position: absolute;
      top: 10%;
      left: 1.2rem;
    }

    p{
      position: absolute;
      left: 3.6rem;
      top: 30%;
    }
  }

  .file{
    display: none;
  }

  a:hover{
    transform: none;
  }

  .price{
    position: relative;
    p { 
      position: absolute;
      bottom: 12.5px;
      left: 11px;
      color: ${({theme})=>theme.COLORS.LIGHT_600};
    }
    input{
      padding-left: 2rem;
    }
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

  button{
    @media(min-width: 1024px){
      width: 12rem;
      align-self: flex-end;
    } 
  }
`;

export const ThreeRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(min-width: 1024px){
      display: grid;
      gap: 32px;
      grid-template-columns: .2fr .9fr auto;
    } 
`;

export const TwoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(min-width: 1024px){
      display: grid;
      gap: 32px;
      grid-template-columns: 3fr 1fr;
    } 
`;