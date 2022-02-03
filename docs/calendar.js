import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
const PUBLIC_KEY = "AIzaSyBRTHcbaEfYtMKncP36WEuKyiqTYvcUm4g";
const CALENDAR_ID = "7i8i4lb012dsglucaclv8avfo8@group.calendar.google.com";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const gmtTime = (date) =>
  new Date(date).toLocaleString("en-US", { timeZone: "GMT" });

const mapAppointmentData = (appointment) => ({
  id: appointment.id,
  startDate: gmtTime(appointment.start.dateTime),
  endDate: gmtTime(appointment.end.dateTime),
  title: appointment.summary,
  location: appointment.location,
});

const appointmentComponent = (props) => {
  if (props.data?.title.includes("Breakout")) {
    return (
      <Appointments.Appointment
        {...props}
        style={{ ...props.style, backgroundColor: "#9a0200" }}
      />
    );
  } else if (props.data?.location.includes("Zoom")) {
    return (
      <Appointments.Appointment
        {...props}
        style={{ ...props.style, backgroundColor: "#6639A6" }}
      />
    );
  } else {
    return (
      <Appointments.Appointment
        {...props}
        style={{ ...props.style, backgroundColor: "#3490de" }}
      />
    );
  }
};

async function getData() {
  const dataUrl = [
    "https://www.googleapis.com/calendar/v3/calendars/",
    CALENDAR_ID,
    "/events?key=",
    PUBLIC_KEY,
  ].join("");

  return fetch(dataUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  }).then((response) => response.json());
}


function MyCalendar(myProps) {
  const { isLoading, error, data, isFetching } = useQuery("calendarData", () =>
    getData()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Paper>
      <Scheduler
        data={data.items.map(mapAppointmentData)}
        height={660}
        width={500}
      >
        <ViewState currentDate={myProps.currentDate} currentViewName={"Day"} />
        <DayView
          startDayHour={myProps.startHour}
          endDayHour={myProps.endHour}
        />
        <Appointments appointmentComponent={appointmentComponent} />
      </Scheduler>
    </Paper>
  );
}

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

export function Calendar(props) {
  if (isSafari){
    return <div> Please use another browser (Chrome/Firefox) to view the Calendar </div>
  }
  return (
    <QueryClientProvider client={queryClient}>
     <MyCalendar {... props} />
    </QueryClientProvider>
  );
}
