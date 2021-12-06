import './CalendarWeekDay.css'
import * as React from 'react';
import CalendarDay from '../../models/CalendarDay';

export interface CalendarWeekDayProps {
  day: CalendarDay;
}

export function CalendarWeekDay ({day}: CalendarWeekDayProps) {
  const dayNames: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getMondayBasedWeekday = (date: Date) => {
    const weekday = date.getDay();
    return weekday === 0 ? dayNames.length - 1 : weekday - 1;
  }

  return (
    <div className="calendar-day">
      {dayNames[getMondayBasedWeekday(day.date)]}
    </div>
  );
}
