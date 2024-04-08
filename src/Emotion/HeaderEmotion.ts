import styled from "@emotion/styled"

export const HeaderBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: royalblue;
    color: white;
`

export const InnerBox = styled.div`
    min-width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    * {
        cursor: pointer;
    }
`