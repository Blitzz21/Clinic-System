import VisitsIcon from '../../../img/VisitsIcon.svg';

export default function Visits() {
    Visits = "0";
    return (
    <div className='flex flex-col p-4 w-[400px] h-[300px] items-center shadow-lg rounded-xl outline outline-1 outline-[#EEEEEE]'>
        <div className='flex flex-row items-top mr-auto items-center'>
            <img className='flex bg-contain w-11 h-11 p-2' src={VisitsIcon} alt="Visits" />
            <h1 className='font-bold text-xl'>Total Clinic Visits</h1>
        </div>

        <div className='flex flex-col p-4'>
            <div className='flex flex-row'>
                <div className='p-8'>
                    <p>You have visited the clinic:</p>
                    <div className='px-16'>
                        <h2 className='text-4xl font-semibold'>{Visits}</h2>
                    </div>
                    <p>This month.</p>
                </div>

                <div className='flex p-8 items-center'>
                    <div className='flex items-baseline'>
                        <div className='mr-1 h-[100px] w-8 bg-blue-400'></div>
                        <div className='mr-1 h-12 w-8 bg-blue-600'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}