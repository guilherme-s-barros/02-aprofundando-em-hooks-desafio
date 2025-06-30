import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
  }

  body {
    background: ${({ theme }) => theme.color.base.background};
  }

  body, input, textarea, button {
    ${({ theme }) => theme.text.body.regularM};
    color: ${({ theme }) => theme.color.base.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    cursor: pointer;
  }
`
