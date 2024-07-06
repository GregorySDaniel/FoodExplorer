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

  img {
    width: 190px;
  }

`