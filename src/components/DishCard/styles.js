import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  
  height: 18rem;
  width: 13rem;
  
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

  padding: 24px;
  gap: 8px;

  position: relative;

  @media(min-width: 1024px){
    height: 29rem;
    width: 19rem;
  }

  .desktop{
    font-family: 'Roboto', serif;
    font-size: 1rem;
    font-weight: 300;
    @media(max-width: 1024px){
      display: none;
    }
  }


  img{
    width: 5.5rem;
    height: 5.5rem;
    object-fit: contain;

    @media(min-width: 1024px){
      width: 10rem;
      height: 10rem;
    }
  }

  button{
    width: 100%;
  }

  .svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  span {
    color: ${({theme}) => theme.COLORS.CAKE_200};

    @media(min-width: 1024px){
      font-weight: 400;
      font-size: 1.6rem;
  }
  }

  p{
    font-size: 1rem;

    @media(min-width: 1024px){
      font-weight: 700;
      font-size: 1.3rem;
  }
  }
`;

export const Select = styled.div`
  display: flex;
  gap: 12px;
`;