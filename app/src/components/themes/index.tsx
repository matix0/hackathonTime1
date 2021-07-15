import {createGlobalStyle} from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string,
        color: string
    }
  }

export const lightTheme = {
    body: '#fff',
    color: 'black'
}

export const darkTheme = {
    body: '#000',
    color: 'white'
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color}
    }
`