import VisitsIcon from '../../../img/VisitsIcon.svg';

export default function Recent() {
    return (
    <div className='flex flex-col bg-[#FFFFFF] p-4 m-4 w-[400px] outline outline-1 outline-[#EEEEEE] h-fit items-center shadow-lg rounded-xl'>
        <div className='flex flex-row items-top p-4'>
            <img className='bg-contain w-8 h-8' src={VisitsIcon} alt="Visits" />
            <h1 className='font-bold text-xl align-middle'>Recent Visits</h1>
        </div>
        <ul className='p-4 list-disc'>
            <li>No Records yet.</li>
        </ul>
    </div>
    )
}