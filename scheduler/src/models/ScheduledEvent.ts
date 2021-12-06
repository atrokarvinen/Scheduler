export default interface ScheduledEvent {
  startTime: Date;
  endTime: Date;

  label: string;
  description?: string;
}