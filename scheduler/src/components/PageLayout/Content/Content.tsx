import "./Content.css";
import * as React from "react";
import { CalendarNavigation } from "../../CalendarNavigation/CalendarNavigation";
import { CalendarWeekly } from "../../CalendarWeekly/CalendarWeekly";
import { CalendarDate } from "../../CalendarDate/CalendarDate";
import { ReminderNotes } from "../../ReminderNotes/ReminderNotes";

export interface ContentProps {}

export function Content(props: ContentProps) {
  return (
    <div className="content">
      <CalendarNavigation />
      <CalendarDate />
      <CalendarWeekly />
      <ReminderNotes />
    </div>
  );
}
