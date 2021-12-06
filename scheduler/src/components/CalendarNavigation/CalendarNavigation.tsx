import './CalendarNavigation.css'
import * as React from 'react';
import { useState } from 'react';

export interface CalendarNavigationProps {
}

export function CalendarNavigation (props: CalendarNavigationProps) {
  const [selectedWeek, setSelectedWeek] = useState(47)

  const backButtonCommand = () => {
    setSelectedWeek(selectedWeek - 1)
  }

  const forwardButtonCommand = () => {
    setSelectedWeek(selectedWeek + 1)
  }

  return (
    <div className="calendar-navigation">
      <button className="nav-button" onClick={backButtonCommand}>{`${"<"}`}</button>
      <button className="nav-button" onClick={forwardButtonCommand}>{`${">"}`}</button>
      <span className="calendar-label">
        Week:
        <span className="calendar-text-value">
          {selectedWeek}
        </span>
      </span>
    </div>
  );
}
