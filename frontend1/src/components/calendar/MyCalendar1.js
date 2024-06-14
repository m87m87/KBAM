import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid'

const MyCalendar1 = ({myEvents}) => {
    return (
      
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin ]}
      initialView="dayGridMonth"
        
      events= {myEvents}


      headerToolbar = {{
        left: 'prev,next', 
        center: 'title',
        right: 'timeGridWeek, dayGridMonth, dayGridYear'
      }}

    />
    );
}

export default MyCalendar1;