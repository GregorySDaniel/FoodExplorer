import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;


  img{
    width: 6rem;
    height: 6rem;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  button {
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  p{
    font-size: 1.3rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  span {
    font-size: .8rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-weight: 200;
  }
`;