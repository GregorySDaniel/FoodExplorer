import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  a{
    margin-top: 2rem;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    padding: 1rem;
  }
`;