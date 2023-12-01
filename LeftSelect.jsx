import React, {useState} from "react";
import Controller from "./Controller";
import "./LeftSelect.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function LeftSelect(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="AllPage">
            <div className="LeftSelect">
                <h4>메뉴</h4>
                <Controller></Controller>
            </div>
            <div className="MainPage">
                <div className="Calendar">
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </div>
        
    )
}
export default LeftSelect;