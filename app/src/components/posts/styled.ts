import styled from "styled-components";

export const FeedBox = styled.div`
    display: flex;
    margin-left: 0.5vw;
    background-color: aqua;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    height: 28vh;
    width: 40vw;
    background-color: ${props => props.theme.colors.background};
    border-style: solid;
    border-color: #70e864;
    border-radius: 25px;
    box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.25);
`