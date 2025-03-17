import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Friends } from './components/Friends/Friends';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import s from './styles.module.css';

export const App = () => {
    const [selectedFriendId, setSelectedFriendId] = useState(null);

    const selectFriend = (id) => {
        console.log(`Выбранный друг: ${id}`);
        setSelectedFriendId(id);
    };

    return (
        <BrowserRouter>
            <Header />
            <div className={s.content}>
                <Sidebar />
                <Routes>
                    <Route path="/profile" element={<Navigate to="/profile/0" />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/friends" element={<Friends onFriendClick={selectFriend} />} />
                    <Route path="*" element={<Navigate to ='/profile/0'/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};