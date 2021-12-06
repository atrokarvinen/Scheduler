import "./CalendarWeekly.css";
import * as React from "react";
import { DummyCalendarDays } from "../../models/TestDummyInstances";
import { CalendarWeekDay } from "../CalendarWeekDay/CalendarWeekDay";

export interface CalendarWeeklyProps {}

export function CalendarWeekly(props: CalendarWeeklyProps) {
  const createTimeIntervals = (intervalInMinutes: number): Date[] => {
    if (intervalInMinutes < 1) {
      throw new Error("Time interval needs to be at least 1 minute.");
    }

    const time = new Date();
    const beginDate = time.getDate();
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);

    const times: Date[] = [];
    const maxIntervalCount = 100;
    let i = 0;
    while (i < maxIntervalCount && time.getDate() === beginDate) {
      times.push(new Date(time));
      time.setMinutes(time.getMinutes() + intervalInMinutes);
      i++;
    }

    return times;
  };

  const timeIntervals: Date[] = createTimeIntervals(30);

  const formatTimeInterval = (date: Date): string => {
    const paddedHours = padNumberStr(date.getHours(), 2)
    const paddedMinutes = padNumberStr(date.getMinutes(), 2)
    return `${paddedHours}:${paddedMinutes}`;
  };

  function padNumberStr(number: number | string, padCount: number): string {
    let numberStr = number.toString();
    numberStr = numberStr.toString();
    while (numberStr.length < padCount) numberStr = "0" + numberStr;
    return numberStr;
  }

  const daysToRender = DummyCalendarDays;

  return (
    <div className="calendar-weekly">
      <div className="day-time-intervals">
        {timeIntervals.map((interval) => {
          return (
            <div key={interval.toString()} className="day-time-interval">
              {formatTimeInterval(interval)}
            </div>
          );
        })}
      </div>
      {daysToRender.map(day => {
        return <CalendarWeekDay day={day} />
      })}
    </div>
  );
}
