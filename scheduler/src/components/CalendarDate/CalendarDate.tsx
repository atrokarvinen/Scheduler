import './CalendarDate.css'
import * as React from 'react';

export interface CalendarDateProps {
}

export function CalendarDate (props: CalendarDateProps) {
  return (
    <div className="calendar-date">
      <h2>{`Date: ${new Date().toLocaleDateString("fi-FI")}`}</h2>
    </div>
  );
}
