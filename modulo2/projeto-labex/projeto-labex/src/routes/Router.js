import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage';
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage';

export const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<HomePage/>} />
                    <Route path='AdminHome' element = {<AdminHomePage/>} />
                    <Route path='AppliForm' element = {<ApplicationFormPage/>} />
                    <Route path='Create' element = {<CreateTripPage/>} />
                    <Route path='ListTrips' element = {<ListTripsPage/>} />
                    <Route path='Login' element = {<LoginPage/>} />
                    <Route path='TripDetails' element = {<TripDetailsPage/>} />
                   
                </Routes>
            </BrowserRouter>
        </div>
    )
}