import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Buttons() {
    const [showAppointment, setShowAppointment] = useState(false);
    const [reason, setReason] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = () => {
        if (!reason || !date) {
        alert("Please fill in both the reason and date.");
        return;
        }

        // Process the appointment request (you can customize this)
        console.log("Appointment Requested:", { reason, date });

        // Reset and close overlay
        setReason("");
        setDate("");
        setShowAppointment(false);
    };
    
    return (
    <div className='flex flex-col'>
        <button onClick={() => setShowAppointment(true)} className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button">Request Appointment</button>
        <button className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button"><Link to="/form">Edit Medical Record</Link></button>
        <button className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button">Check Medical Record</button>
    

    {showAppointment && (
        <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
        style={{ zIndex: 50 }}
        >
        {/* Popup */}
        <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Request Appointment</h3>
                <button onClick={() => setShowAppointment(false)} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>

            <label className="block mb-2">
            Reason:
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Type reason" className="w-full mt-1 p-2 outline-none border border-gray-300 rounded-md focus:border-blue-400"/>
            </label>
            <label className="block mb-4">
            Set Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1 p-2 border outline-none border-gray-300 rounded-md focus:border-blue-400 focus:caret-blue-400"/>
            </label>
            <button onClick={handleSubmit} className="bg-white border border-gray-400 rounded-full text-black px-4 py-2 w-full hover:bg-gray-200 transition-colors">Submit</button>
        </div>
        </div>
        )}
    </div>
    )
}