import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

  font-family: "Inter", sans-serif;

  }
  body {
    background: ${({ theme }) => theme.colors['gray-600']};
    color: ${({ theme }) => theme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
 
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray-200']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['purple-1']}
  }


  input::-webkit-outer-spin-button, 
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }

`
