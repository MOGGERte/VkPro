import React from 'react';
import { BrowserRouter } from 'react-router';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes/AppRoutes';
import s from './styles.module.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={s.content}>
        <Sidebar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};
    