
import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from 'date-fns/parse';
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
import moment from "moment";
import { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "meeting",
    allday: true,
    start: new Date(2024,4,15),
    end : new Date(2024,4,15),
  },
  {
    title: "another meeting",
    start: new Date(2024,4,15),
    end : new Date(2024,4,15),
  },
  {
    title: "another's another meeting",
    start: new Date(2024,4,15),
    end : new Date(2024,4,17),
  },

]


function BigCalendar() {
  const [newEvent, setNewEvent] = useState ({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState (events)

  return (
    <div className="big-calendar">

      <Calendar 
      localizer={localizer} 
      events={allEvents}
      startAccessor="start" 
      endAccessor="end" 
      style={{height: 500, margin:"50px"}} />

    </div>
  );
}

export default BigCalendar;