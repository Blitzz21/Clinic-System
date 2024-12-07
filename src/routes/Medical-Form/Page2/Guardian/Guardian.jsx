import React, { useState } from 'react';

export default function Guardian() {
    const [isDisabled, setIsDisabled] = useState(false);
    const [formValues, setFormValues] = useState({
      suffix: '',
      guardianFirstName: '',
      guardianMiddleName: '',
      guardianLastName: '',
      guardianOccupation: '',
      guardianContact: '',
    });
  
    // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    return (
    <div className='flex flex-col px-12 py-4'>
        <div className='flex flex-row justify-between'>
            <h3>Guardian's Information</h3>
        </div>
            {/* Input fields */}
            <div className='flex flex-wrap'>
                
            <div className="flex flex-row justify-start">
                <select value={formValues.suffix} name='suffix' onChange={handleInputChange} disabled={isDisabled} className='border flex w-full flex-grow px-2 py-2 text-gray-400 focus:text-black rounded-md m-1 focus:outline-none focus:border-blue-400 transition-colors' id="suffix">
                    <option value="None" disabled>Select suffix</option>
                    <option value="None">None</option>
                    <option value="Jr">Jr</option>
                    <option value="Sr">Sr</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="VII">VII</option>
                </select>
            </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.guardianFirstName} name='guardianFirstName' onChange={handleInputChange} id='guardianFirstName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='fatherFirstName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">First Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.guardianMiddleName} name='guardianMiddleName' onChange={handleInputChange} id='guardianMiddleName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='fatherMiddleName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Middle Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.guardianLastName} name='guardianLastName' onChange={handleInputChange} id='guardianLastName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='fatherLastName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Last Name</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.guardianOccupationName} name='guardianOccupationName' onChange={handleInputChange} id='guardianOccupationName' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='fatherOccupationName' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Occupation</label>
                    </div>
                </div>

                <div className="flex m-1 flex-grow">
                    <div class="relative w-full z-10">
                        <input value={formValues.guardianContact} name='guardianContact' onChange={handleInputChange} id='guardianContact' type='text' disabled={isDisabled} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                        <label htmlFor='fatherContact' className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Contact Number</label>
                    </div>
                </div>

            </div>
    </div>
    )
}