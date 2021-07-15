import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from '../../components/themes'

function TestPage() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <div>Hello</div>
        </ThemeProvider>
    )
}

export default TestPage;