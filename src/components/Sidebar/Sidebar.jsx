import React from 'react';
import { NavLink } from 'react-router';
import s from './styles.module.css';

export const Sidebar = () => {
    return (
      <nav className={s.sidebar}>
        <NavLink 
          to="/profile"
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Профиль
        </NavLink>
        <NavLink 
          to="/news"
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Новости
        </NavLink>
        <NavLink 
          to="/friends"
          className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}
        >
          Друзья
        </NavLink>
      </nav>
    );
  };
