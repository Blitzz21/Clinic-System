import React, { useState } from "react";
import Buttons from '../Dashboard/Buttons/Buttons'
import Header from './Header/Header'
import Selection from './Selection/Selection'
import Visits from './Visits/Visits'
import Recent from './Recent/Recent'

export default function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center w-dvw h-dvh'>
            <Header />
            <Selection />
            <Visits />
            <Recent />
            <Buttons />
        </div>
    )
}