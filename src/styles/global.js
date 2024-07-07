import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', serif;
  }

  a, button {
    text-decoration: none;
    font-family: 'Poppins', serif;
  }

  a{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
  

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button, a:hover {
    filter: brightness(0.9);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  input{
    font-family: 'Roboto', serif;
    font-size: 16px;
    padding: 14px 12px;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    border: 0;
    border-radius: 8px;
  }

  label{
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({theme})=>theme.COLORS.LIGHT_400};
  }
`