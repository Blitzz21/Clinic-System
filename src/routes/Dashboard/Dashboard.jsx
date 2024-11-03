import React, { useState } from "react";
import Header from './Header/Header';
import Selection from './Selection/Selection';
import Home from './Home/Home';
import Account from './Account/Account';
import Notification from './Notification/Notification';

export default function Dashboard() {
    const [currentView, setCurrentView] = useState('home');

    const getContent = () => {
        switch(currentView) {
            case 'home':
                return <Home />;
            case 'account':
                return <Account />;
            case 'notification':
                return <Notification />;
            default:
                return <Home />;
        }
    };

    return (
        <div className='flex flex-col items-center w-dvw h-dvh'>
            <Header />
            <Selection currentView={currentView} setCurrentView={setCurrentView} />
            <div className="flex-grow w-full">
                {getContent()}
            </div>
        </div>
    );
}