import './Layout.css'

import * as React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export interface LayoutProps {
}

export function Layout (props: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
