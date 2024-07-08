import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  gap: 2rem;

  @media(min-width: 1024px){
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 4rem;
    border-radius: 16px;
    width: 30rem;
  }

  a{
    margin-top: 1rem;
  }


`;