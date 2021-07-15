import {createGlobalStyle} from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string,
    }
  }

export const lightTheme = {
    body: '#fff'
}

export const darkTheme = {
    body: '#000'
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`