import React from 'react';
import Visits from '../Visits/Visits';
import Recent from '../Recent/Recent';
import Buttons from '../Buttons/Buttons';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Visits />
            <Recent />
            <Buttons />
        </div>
    );
} 