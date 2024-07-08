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
  

  button, a, svg{
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  button:hover, a:hover, svg:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  input, textarea {
    font-family: 'Roboto', serif;
    font-size: 1rem;
    padding: 14px 12px;
    background-color: ${({theme})=>theme.COLORS.DARK_800};
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

  select {
    font-family: 'Roboto', serif;
    font-size: 1rem;
    padding: 14px 12px;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    color: ${({theme})=>theme.COLORS.LIGHT_400};
    border: 0;
    border-radius: 8px;
  }
`