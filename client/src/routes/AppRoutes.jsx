import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Profile } from '../components/Profile';
import { News } from '../components/News';
import { Friends } from '../components/Friends';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<News />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/" element={<Navigate to="ee" />} />
      <Route path="*" element={<Navigate to="ee" />} />
    </Routes>
  );
};
