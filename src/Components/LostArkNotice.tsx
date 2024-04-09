// 로스트아크 공지사항 목록 가져오기
import axios from "axios";
import { useEffect, useState } from "react";
import { NoticeBox, NoticeElement, NoticeType, NoticeTitle } from "../Emotion/NoticeEmotion";
import { format} from "date-fns";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";

export default function LostArkNotice():JSX.Element {
    
    const [Notice, setNotice] = useState([]);

    // 공지사항 가져오는 API
    const NoticeList = async() => {
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/news/notices', {
                headers: {
                    Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDExODYifQ.dp5Rwt6qAxGWBF6L00JpgQ8FRk0LC2McvjnYrcIdaVmlW1lcMOhWfDEuQ3d8PBB_bUevh03dw6Shx3sc8_X_B_cUja3eONQ0MWPPa9ZRvHYBjaBn4RPl4pe_M5quBOaQVhTBhcxNYJoCxVQhHfwf_0K0rmAEDHYdSICEIpeD-Ve8WaEBm7JXa36RBP-vefRtcIZh1O35knWa4bXCjuT4rodTYx4WiE_bt4sCUGfaPfzriAe6P5OjlkGx1YEkk3nYGJCVX-cfdIA5qPAc7612BrjV_YuXx5Qh8XzsPL6m5N9v-h-_GAEW10OWSYvxJabPYV8KhPMKanaEpdrpS6i6jA`
                }
            })
            
            setNotice(response.data.filter((data, index) => index <= 5));
        } catch(error)
        {
            console.log(error);
        }
    }

   

    // API 실행하기 위해 useEffect
    useEffect(() => {
        NoticeList();
    }, [])

    return (
        <NoticeBox>
            {Notice.map((data, index) =>  {
                const formatMap = format(data.Date, 'yyyy-MM-dd');
                const uniqueKey = uuidv4();
              
                
                return (
                    <NoticeElement key={uniqueKey}>
                        <NoticeType>{data.Type}</NoticeType>
                        <NoticeTitle>{data.Title}</NoticeTitle>
                        <span>{formatMap}</span>
                    </NoticeElement>
                )
            }
                
            )
            }
           
        </NoticeBox>
    )
}