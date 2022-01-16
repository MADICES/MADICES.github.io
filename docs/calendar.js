import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
const PUBLIC_KEY = "AIzaSyBRTHcbaEfYtMKncP36WEuKyiqTYvcUm4g";
const CALENDAR_ID = "7i8i4lb012dsglucaclv8avfo8@group.calendar.google.com";

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
  if (props.data?.location.includes("Zoom")) {
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

  return fetch(dataUrl).then((response) => response.json());
}

export function Calendar(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect with an empty dependency array works the same way as componentDidMount
  useEffect(async () => {
    try {
      // set loading to true before calling API
      setLoading(true);
      const data = await getData();
      console.log(data);
      setData(data);
      // switch loading to false after fetch is complete
      setLoading(false);
    } catch (error) {
      // add error handling here
      setLoading(false);
      console.log(error);
    }
  }, []);

  // return a Spinner when loading is true
  if (loading) return <span>Loading</span>;

  return (
    <Paper>
      <Scheduler data={data.items.map(mapAppointmentData)} height={660}>
        <ViewState currentDate={props.currentDate} currentViewName={"Day"} />
        <DayView startDayHour={props.startHour} endDayHour={props.endHour} />
        <Appointments appointmentComponent={appointmentComponent} />
      </Scheduler>
    </Paper>
  );
}
