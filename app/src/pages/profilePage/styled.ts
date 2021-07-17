import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.background};
`

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: auto;
    background-color: ${props => props.theme.colors.background};
`