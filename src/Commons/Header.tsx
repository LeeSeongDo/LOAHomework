import { css, jsx } from "@emotion/react"
import {HeaderBox} from '../Emotion/HeaderEmotion'
import { InnerBox } from "../Emotion/HeaderEmotion"


export default function Header():JSX.Element {
    return (
        <div>
            <HeaderBox>
                {/* 왼쪽 부분 */}
                <InnerBox>
                    <h2>LOA_H</h2>
                    <span>내 숙제</span>
                </InnerBox>

                {/* 오른쪽 부분 */}
                <InnerBox>
                    <h3>모드변경</h3>
                    <h3>로그인</h3>
                </InnerBox>
            </HeaderBox>
        </div>
    )
}