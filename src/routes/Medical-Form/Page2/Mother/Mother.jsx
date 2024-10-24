import React, { useState } from 'react';

export default function Mother() {
    const [isDisabled, setIsDisabled] = useState(false);
    const [formValues, setFormValues] = useState({
      motherFirstName: '',
      motherMiddleName: '',
      motherLastName: '',
      motherOccupation: '',
      motherContact: '',
    });
  
    // Handler for checkbox toggle
    const handleCheckboxChange = () => {
      if (!isDisabled) {
        // Clear inputs when disabling
        setFormValues({
            motherFirstName: '',
            motherMiddleName: '',
            motherLastName: '',
            motherOccupation: '',
            motherContact: '',
        });
      }
      setIsDisabled(!isDisabled);
    };

    // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    return (
    <div className='flex flex-col px-12 py-4'>
        <div className='flex flex-row justify-between'>
            <h3>Mother's Information</h3>
            <label className='text-red-600'><input type="checkbox" checked={isDisabled} onChange={handleCheckboxChange}/>+</label>
        </div>

            {/* Input fields */}
            <div className='flex flex-wrap'>
                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.motherFirstName} name='motherFirstName' onChange={handleInputChange} id='motherFirstName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='motherFirstName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">First Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.motherMiddleName} name='motherMiddleName' onChange={handleInputChange} id='motherMiddleName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='motherMiddleName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Middle Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.motherLastName} name='motherLastName' onChange={handleInputChange} id='motherLastName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='motherLastName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Last Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.motherOccupation} name='motherOccupation' onChange={handleInputChange} id='motherOccupation' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='motherOccupation' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Occupation</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.motherContact} name='motherContact' onChange={handleInputChange} id='motherContact' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='motherContact' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Contact Number</label>
                    </div>
                </div>

            </div>
    </div>
    )
}