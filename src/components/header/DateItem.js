import React, {useState, useEffect} from 'react';
import './DateItem.css'

const DateItem = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    })

    const today = new Date();
    const day = today.toLocaleDateString();

    return (
        <div className="date"><b>
            <div className="time">{time}</div>
            <div className="day"><i>{day}</i></div>
            </b>
        </div>
    )
}

export default DateItem;