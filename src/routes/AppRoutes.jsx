import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layout/MainLayout/MainLayout';
import About from '../pages/About/About';
import Games from '../pages/Games/Games';
import Main from '../pages/Main/Main';
import Matched from '../pages/Matched/Matched';
import Mines from '../pages/Mines/Mines';
import NotFound from '../pages/NotFound/NotFound';
import SeaBattle from '../pages/SeaBattle/SeaBattle/SeaBattle';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/main" index element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/matched" element={<Matched />} />
                    <Route path="/seabattle" element={<SeaBattle />} />
                    <Route path="/mines" element={<Mines />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
