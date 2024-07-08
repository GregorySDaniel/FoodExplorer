import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  width: 100%;

  > p{
    font-size: 1.1rem;
    @media(min-width: 1020px){
      font-size: 1.8rem;
  }
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  
`;