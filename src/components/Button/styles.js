import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  padding: 12px;
  border-radius: 5px;
  border: 0;
`;