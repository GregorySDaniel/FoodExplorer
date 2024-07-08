import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;
  gap: 16px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  p{
    font-size: 0.7rem;
  }

  @media(min-width: 1020px){
    justify-content: space-between;
    padding: 0 10%;
  }
`;