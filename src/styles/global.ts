import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }
  body{
    background-color: #1F1F28;
    background-size: 100vw;
    -webkit-font-smoothing : antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    @media(max-width:600px){

    }
  }
  button{
    cursor: pointer;
  }
`;
