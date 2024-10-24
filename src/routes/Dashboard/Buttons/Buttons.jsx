import { Link } from "react-router-dom";

export default function Buttons() {
    return (
    <div className='flex flex-col'>
        <button className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button">Request Appointment</button>
        <button className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button"><Link to="/form">Edit Medical Record</Link></button>
        <button className='px-28 py-4 m-2 bg-[#091C98] text-white rounded-3xl hover:bg-[#16205c] ease-in duration-100' type="button">Check Medical Record</button>
    </div>
    )
}