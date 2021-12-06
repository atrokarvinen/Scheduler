import ScheduledEvent from "./ScheduledEvent";

export default interface CalendarDay {
  date: Date;
  scheduledEvents?: ScheduledEvent[];
}
