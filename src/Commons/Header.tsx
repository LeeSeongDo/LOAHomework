import { css, jsx } from "@emotion/react"
import {HeaderBox} from '../Emotion/HeaderEmotion'

export default function Header():JSX.Element {
    return (
        <HeaderBox> 
            {/* 왼쪽 부분 */}
            <div>
                <h1>로아 숙제검사</h1>
                <h3>숙제검사하기</h3>
            </div>

            {/* 오른쪽 부분 */}
            <div>
                <h3>모드변경</h3>
                <h3>로그인</h3>
            </div>
        </HeaderBox>
    )
}