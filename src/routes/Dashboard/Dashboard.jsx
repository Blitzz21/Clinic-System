import Header from './Header/Header'
import Selection from './Selection/Selection'
import Visits from './Visits/Visits'
import Recent from './Recent/Recent'
import Buttons from './Buttons/Buttons'
import X from '../../img/X.svg'

export default function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center w-dvw h-dvh'>
            <Header />
            <Selection />
            <Visits />
            <Recent />
            <Buttons />
            <Appointment />
        </div>
    )
}

const Appointment = () => {
    return(
      <div className='absolute hidden flex-col justify-center border-1 bg-white border-[#EEEEEE] shadow-lg p-8'>
        <div className='flex flex-row items-center justify-between p-4'>
            <img className='flex w-3 h-3 cursor-pointer' src={X} alt="X" />
            <h1 className='text-xl font-bold'>Set Appointment</h1>
        </div>

        <div className='flex flex-col p-4'>
            <label htmlFor="reason">Reason</label>
            <input id='reason' type="text" placeholder='Type a reason'/>
        </div>

        <div className='flex flex-col p-4'>
            <label htmlFor="date">Date</label>
            <input className='' type="date" id="date" />
        </div>

        <button className='' type="submit">Submit</button>
      </div>
    )
}