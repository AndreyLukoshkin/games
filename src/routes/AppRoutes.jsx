import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../layout/Main/Main';
import MainLayout from '../layout/MainLayout/MainLayout';
import About from '../pages/About/About';
import Games from '../pages/Games/Games';
import Matched from '../pages/Matched/Matched';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/main" index element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/matched" element={<Matched />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
