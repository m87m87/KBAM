import React, { useEffect, useState } from "react";
// import BigCalendar from "./BigCalender";
import MyCalendar1 from "./calendar/MyCalendar1";
import AxiosInstance from "./Axios"


const Eventspage = () => {
    
    const[events, setEvents] = useState()

    const GetData = () => {
        AxiosInstance.get(`tocapturecomments/`).then((res) => {
            setEvents(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        GetData();
    }, [])

    return (
        <div>
            <h4>All events should be displayed here</h4>

            <MyCalendar1
            myEvents={events}
            />
            
        </div>
    );
}

export default Eventspage;
