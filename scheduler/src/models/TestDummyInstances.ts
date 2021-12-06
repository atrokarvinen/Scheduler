import CalendarDay from "./CalendarDay";
import ScheduledEvent from "./ScheduledEvent";

const dateNow: Date = new Date();

const createCalendarDay = (date: Date, eventCount: number = 0): CalendarDay => {
  return {
    date: date,
    scheduledEvents: createEvents(date, eventCount),
  };
};

const createEvents = (date: Date, count: number): ScheduledEvent[] => {
  const events: ScheduledEvent[] = [];
  for (let i = 0; i < count; i++) {
    events.push(createEvent(date));
  }
  return events;
};

const createEvent = (
  start?: Date,
  end?: Date,
  label?: string,
  description?: string
): ScheduledEvent => {
  return {
    startTime: start ?? dateNow,
    endTime: end ?? dateIncrementHours(start),
    label: label ?? "[Event name]",
    description: description ?? "[Event description]",
  };
};

const dateIncrementHours = (date?: Date, incCount?: number): Date => {
  const dateCopy = date === undefined ? new Date(dateNow) : new Date(date);
  const hours = dateCopy.getHours();
  const randomInt = Math.ceil(Math.random() * 3);
  dateCopy.setHours(hours + (incCount ?? randomInt));
  return dateCopy;
};

const dateIncrementDays = (date: Date, incCount: number): Date => {
  const dateCopy = new Date(date);
  const hours = dateCopy.getDate();
  dateCopy.setDate(hours + incCount);
  return dateCopy;
};

export const DummyScheduledEvents: ScheduledEvent[] = [
  createEvent(),
  createEvent(),
  createEvent(),
];

export const DummyCalendarDayNoEvents: CalendarDay = {
  date: dateNow,
};

export const DummyCalendarDayWithEvents: CalendarDay = {
  date: dateNow,
  scheduledEvents: DummyScheduledEvents,
};

export const DummyCalendarDays: CalendarDay[] = [
  createCalendarDay(dateNow, 3),
  createCalendarDay(dateIncrementDays(dateNow, 1)),
  createCalendarDay(dateIncrementDays(dateNow, 2)),
  createCalendarDay(dateIncrementDays(dateNow, 3), 5),
  createCalendarDay(dateIncrementDays(dateNow, 4), 1),
  createCalendarDay(dateIncrementDays(dateNow, 5)),
  createCalendarDay(dateIncrementDays(dateNow, 6)),
];
