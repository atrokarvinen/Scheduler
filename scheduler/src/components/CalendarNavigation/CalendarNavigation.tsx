import './CalendarNavigation.css'
import * as React from 'react';

export interface CalendarNavigationProps {
}

export function CalendarNavigation (props: CalendarNavigationProps) {
  return (
    <div className="calendar-navigation">
      <h2>{`<< Nav >>`}</h2>
    </div>
  );
}
