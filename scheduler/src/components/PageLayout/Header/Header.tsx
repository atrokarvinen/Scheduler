import "./Header.css";
import * as React from "react";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="header">
      <h1>Header - React scheduler</h1>
    </div>
  );
}
