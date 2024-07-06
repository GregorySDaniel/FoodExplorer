import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  width: 100%;

  p{
    font-size: 18px;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  
`;