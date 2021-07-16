import {createGlobalStyle} from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            background: string,
            text: string
        },
    }
  }

export const lightTheme = {
    title: 'light',
    colors: {
        primary: 'white',
        background: 'white',
        text: 'black'
    },
}

export const darkTheme = {
    title: 'dark',
    colors: {
        primary: 'black',
        background: '#212529',
        text: '#6bbf59'
    },
}


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text}
    }
`