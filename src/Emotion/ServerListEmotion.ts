import styled from "@emotion/styled"

export const MyCharacterBox = styled.div `
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
`

export const ActiveServerFont = styled.strong`
    font-size: 19px;
    line-height: 23px;
    color: black;
    padding: 10px;
    transition: opacity 1s;
    transition: color 1s;
    cursor: pointer;
`

export const PassiveServerFont = styled.strong`
    font-size: 19px;
    line-height: 23px;
    color: gray;
    padding: 10px;
    cursor: pointer;

    transition: color 1s;

    :hover {
        color: black;
    }
`