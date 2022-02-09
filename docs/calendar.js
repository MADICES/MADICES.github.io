import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
const PUBLIC_KEY = process.env.CALENDAR_API_KEY;
const CALENDAR_ID = "7i8i4lb012dsglucaclv8avfo8@group.calendar.google.com";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { isSafari } from "react-device-detect";

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

function Calendar(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyCalendar {...props} />
    </QueryClientProvider>
  );
}


export function CalendarPage() {
 try {
  if (isSafari) {
    return (
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Etc%2FGMT&showTz=1&mode=AGENDA&hl=en&src=N2k4aTRsYjAxMmRzZ2x1Y2FjbHY4YXZmbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB"
        // style="border:solid 1px #777"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    );
  }} catch (e) {
    return (
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Etc%2FGMT&showTz=1&mode=AGENDA&hl=en&src=N2k4aTRsYjAxMmRzZ2x1Y2FjbHY4YXZmbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDBB"
        // style="border:solid 1px #777"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    );
  }
  return (
    <div>
      <div className='container' style={{marginBottom: "2em"}}>
      <h3>First day </h3>
      <div>
        <Calendar currentDate="2022-2-7" startHour="14" endHour="23" />
      </div>
      </div>
      <div className='container' style={{marginBottom: "2em"}}>
      <h3>Second day</h3>
      <div>
        <Calendar currentDate="2022-2-8" startHour="9" endHour="23" />
      </div>
      </div>
      <div className='container' style={{marginBottom: "2em"}} >
      <h3> Third day</h3>
      <div>
        <Calendar currentDate="2022-2-9" startHour="9" endHour="17" />
      </div>
      </div>
    </div>
  );
}
