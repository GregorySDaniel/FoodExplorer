import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  
  height: 292px;
  width: 210px;
  
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

  padding: 24px;
  gap: 8px;

  position: relative;

  img{
    width: 88px;
  }

  button{
    width: 100%;
  }

  > svg{
    position: absolute;
    top: 12px;
    right: 12px;
  }

  span {
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  p{
    font-size: 16px;
  }
`;