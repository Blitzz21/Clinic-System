import React, { useState } from 'react';
import Header from '../../Dashboard/Header/Header';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import { useNavigate } from 'react-router-dom';

const pages = [<Page1 readOnly={true} />, <Page2 readOnly={true} />, 
               <Page3 readOnly={true} />, <Page4 readOnly={true} />];

export default function ViewMedicalRecord() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dashboard');
    };

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsExiting(false);
            }, 300);
        }
    };

    return (
        <div className='flex flex-col justify-center z-0 px-4 sm:px-8'>
            <Header />
            <div className='flex flex-row justify-center items-center p-4'>
                {pages.map((_, index) => (
                    <React.Fragment key={index}>
                        <p className={`bg-${currentPage === index ? 'black' : 'white'} 
                           text-${currentPage === index ? 'white' : 'black'} 
                           border border-black rounded-full py-1 px-3`}>
                            {index + 1}
                        </p>
                        {index < pages.length - 1 && 
                         <span className='w-3 h-1 bg-black border border-black mx-[-1px]'></span>}
                    </React.Fragment>
                ))}
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col p-4 justify-center items-center w-full max-w-[800px]'>
                    <div className={`transition-opacity duration-300 
                         ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                        {pages[currentPage]}
                    </div>
                    <div className='flex pt-8 flex-row justify-between w-full'>
                        <button
                            onClick={handleBack}
                            className='border rounded-full font-bold px-8 py-2 sm:px-16 
                                     border-black hover:text-white hover:bg-black transition-colors'>
                            Back to Dashboard
                        </button>
                        {currentPage < pages.length - 1 && (
                            <button
                                onClick={handleNext}
                                className='border rounded-full font-bold px-8 py-2 sm:px-16 
                                         border-[#3A49AC] bg-[#7581d8] text-[#3A49AC] 
                                         hover:bg-[#5c66b3] transition-colors'>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}