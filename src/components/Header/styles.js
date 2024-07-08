import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 42px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  @media (min-width: 1024px) {
      padding: 20px 10%;
      gap: 40px;
    }

  .mobile{
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .desktop{
    @media (max-width: 1024px) {
      display: none;
    }
  }

  img {
    width: 12rem;
  }

  .search{
    position: relative;
  }

  input{
    width: 100%;
    padding-left: 48px;
  }

  .search{
    width: 100%;
  }

  .search svg {
    position: absolute;
    top: 8px;
    left: 10px;
  }

  button{
    width: 18rem;
  }

  .close{
    position: fixed;
    z-index: 2;
  }

  > a {
    display: flex;
    position: relative;

    p{
      font-size: 14px;
      position: absolute;
      right: -2px;
      top: -4px;
      background-color: ${({theme})=> theme.COLORS.TOMATO_100};
      border-radius: 100%;
      padding: 0 6px;
    }
  }

`