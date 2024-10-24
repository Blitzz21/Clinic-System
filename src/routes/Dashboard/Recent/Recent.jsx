import VisitsIcon from '../../../img/VisitsIcon.svg';

export default function Recent() {
    return (
    <div className='flex flex-col bg-[#FFFFFF] m-4 w-[400px] outline outline-1 outline-[#EEEEEE] h-fit items-center shadow-lg rounded-xl'>
        <div className='flex flex-row justify-start items-top p-4 mr-auto items-center'>
            <img className='bg-contain w-11 h-11 p-2' src={VisitsIcon} alt="Visits" />
            <h1 className='font-bold text-xl align-middle items-center p-1'>Recent Visits</h1>
        </div>
        <ul className='p-4 list-disc'>
            <li>No Records yet.</li>
        </ul>
    </div>
    )
}