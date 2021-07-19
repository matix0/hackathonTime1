import styled from "styled-components";

export const LateralBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    border-right-style: solid;
    border-right-color: #808080;
    height: 100vh;
    width: 20vw;
`;

export const InputBox = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 7vh;
    height: 28vh;
    width: 40vw;
    background-color: ${props => props.theme.colors.background};
    border-style: solid;
    border-color: #70e864;
    border-radius: 25px;
    margin-right: 10vw;
    box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.25);
`

export const InputField = styled.textarea`
    height: 18vh;
    width: 35vw;
    margin-top: 1vw;
    margin-left: 2.5vw;
    align-self: start;
    resize: none;
    border: none;
    outline: none;
    background-color: ${props => props.theme.colors.background};
`

export const PostBoxStyle = styled.div`
    // display: flex;
    // flex-direction: column;
    // background-color: ${props => props.theme.colors.background};
    // height: 100vh;
    // width: 80vw;
`