import React, {useState} from "react";
import Controller from "./Controller";
import "./MainLayOut.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Graph from "./Graph";

// 메인은 컨트롤러의 부모다

function MainLayOut(){
    const [value, onChange] = useState(new Date());

    const [ChangeNum,setChangeNum] = useState("지정X")
    function handleNumChange(num){
        setChangeNum(num)} /*버튼과 컴포넌트연결*/

    return(
        <div className="AllPage">
            <div className="LeftSelect">
                <h4>메뉴</h4>
                <Controller onChangeNum={handleNumChange} />
            </div>
            <div className="MainPage">
                <div className="CommunityView">
                {ChangeNum}
                </div>
                <div className="Viewer">
                    <Calendar className="Calendar" onChange={onChange} value={value} />
                    <Graph className="Graph"></Graph>
                </div>
            </div>
        </div>
        
    )
}
export default MainLayOut;