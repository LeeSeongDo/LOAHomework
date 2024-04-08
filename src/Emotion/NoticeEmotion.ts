import styled from "@emotion/styled"

export const NoticeBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkgray;

`
export const NoticeElement = styled.div`
    box-sizing: border-box;
    width: calc((100% / 6) - 10px);
    height: 100px;
    padding: 5px;
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;

    span {
        font-size: 14px;
    }

    :last-child {
        border: none;
    }
`

export const NoticeTitle = styled.span`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const NoticeType = styled.span`
    width: 70px;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: white;
    text-align: center;
    color: red;

`