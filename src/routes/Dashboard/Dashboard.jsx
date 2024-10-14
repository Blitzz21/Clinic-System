import Header from './Header/Header'
import Selection from './Selection/Selection'
import Visits from './Visits/Visits'
import Recent from './Recent/Recent'
import Buttons from './Buttons/Buttons'

export default function Dashboard() {
    return (
        <div className='flex flex-col items-center w-dvw h-dvh'>
            <Header />
            <Selection />
            <Visits />
            <Recent />
            <Buttons /> 
        </div>
    )
}