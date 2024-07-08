import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  
  &.open {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(-100%);
  }
  `;

export const Close = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  width: 100%;
  height: 105px;

  padding: 46px;

  p{
    font-family: 'Roboto', serif;
    font-size: 1.4rem;
    margin-left: 8px;
  }
`;

export const Content = styled.div`
  padding: 24px;
  width: 100%;

  .search{
    position: relative;
  }

  input{
    width: 100%;
    padding-left: 48px;
  }

  .search svg {
    position: absolute;
    top: 8px;
    left: 10px;
  }
`;