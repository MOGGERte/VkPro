import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { News } from "./components/News";
import { Friends } from "./components/Friends";
import s from "./styles.module.css";
export const App = () => {
  const [page, setPage] = useState("profile")

  return (
    <div>
      <Header />
      <div className={s.content}>
        <Sidebar setPage = {setPage} />
        <div>{page === "news" && <News />}</div>
        <div>{page === "friends" && <Friends />}</div>
      </div>
    </div>
  );
};
