import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';

const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];

export default function Form() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsExiting(false);
            }, 300); // Match this with the CSS transition duration
        } else {
            // Redirect to /dashboard after form submission
            navigate('/dashboard');
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsExiting(false);
            }, 300); // Match this with the CSS transition duration
        }
    };

    return (
        <div className='flex flex-col justify-center z-0 px-4 sm:px-8'>
            <Header />
            <div className='flex flex-row justify-center items-center p-4'> // For displaying the page numbers
                {pages.map((_, index) => ( 
                    <React.Fragment key={index}>
                        <p className={`bg-${currentPage === index ? 'black' : 'white'} text-${currentPage === index ? 'white' : 'black'} border border-black rounded-full py-1 px-3 sm:py-[1px] sm:px-[10px]`}>
                            {index + 1}
                        </p>
                        {index < pages.length - 1 && <span className='w-3 h-1 bg-black border border-black mx-[-1px]'></span>}
                    </React.Fragment>
                ))}
            </div>
            <div className='flex justify-center'>
                <form className='flex flex-col p-4 justify-center items-center w-full max-w-[800px]' action="">
                    <div
                        className={`transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
                        style={{ transition: 'opacity 300ms ease-in-out' }}
                    >
                        {pages[currentPage]} // For displaying the current page
                    </div>
                    <div className='flex pt-8 flex-row justify-between w-full'>
                        <button
                            type="button"
                            className='border rounded-full font-bold px-8 py-2 sm:px-16 sm:py-2 border-black hover:text-white hover:bg-black transition-colors'
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        {currentPage === pages.length - 1 ? (
                            <button
                                type="button"
                                className='border rounded-full font-bold px-8 py-2 sm:px-16 sm:py-2 border-green-500 bg-green-500 text-white hover:bg-green-600 transition-colors'
                                onClick={handleNext}
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                type="button"
                                className='border rounded-full font-bold px-8 py-2 sm:px-16 sm:py-2 border-[#3A49AC] bg-[#7581d8] text-[#3A49AC] hover:bg-[#5c66b3] transition-colors'
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
