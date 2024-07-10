import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.LIGHT_600};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  padding: 4px 12px;
  border-radius: 5px;
  width: fit-content;

  &.new {
    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    border: 1px dashed ${({theme}) => theme.COLORS.LIGHT_500};
  }

  input{
    padding: 0;
    border-radius: 1px;
    width: 4.5rem;
  }
`;