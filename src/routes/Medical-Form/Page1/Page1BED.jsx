import Input from '../../../components/Input/Input'
import Suffix from '../components/Suffix/Suffix'

export default function Page1BED() {
    return (
        <div>
            <div className='flex flex-col w-full'>
                <h1 className='font-bold'>Name</h1>
                <div className='flex flex-col justify-start'>
                <div className='flex flex-row justify-start'>
                    <Suffix />
                    <Input 
                        label="First Name"
                        inputid="firstname"
                        inputType="text"
                    />
                </div>
                
                <div className='flex flex-row'>
                    <Input label="Middle Name" inputid="middlename" inputType="text"
                    />
                    <Input label="Last Name" inputid="lastname" inputType="text"/>
                </div>
                </div>  
            </div>

            <div className='flex flex-row justify-between flex-wrap'>
                <div className='m-2'>
                    <h1 className='font-bold'>Date of Birth</h1>
                    <input className='border w-full flex flex-grow p-1 rounded-md text-gray-400 focus:text-black  focus:outline-none focus:border-blue-400 transition-colors cursor-pointer' type="date" name="birthday" id="bday" required/>
                </div>
                
                <div className='m-2'>
                    <h1 className='font-bold'>Program and Year</h1>
                    <select className='border p-1 text-gray-400 focus:text-black rounded-md focus:outline-none focus:border-blue-400 transition-colors' name="Program" id="program">
                        <option className='overflow-y-scroll' value="None" selected disabled>Select Program and Year</option>
                        <optgroup>
                            <option value="BSCS" disabled>BSCS</option>
                            <option value="bscs1">BSCS 1</option>
                            <option value="bscs2">BSCS 2</option>
                            <option value="bscs3">BSCS 3</option>
                            <option value="bscs4">BSCS 4</option>
                        </optgroup>
                        <optgroup>
                            <option value="BSCS" disabled>BSCrim</option>
                            <option value="bscs1">BSCrim 1</option>
                            <option value="bscs2">BSCrim 2</option>
                            <option value="bscs3">BSCrim 3</option>
                            <option value="bscs4">BSCrim 4</option>
                        </optgroup>
                    </select>
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className='font-bold'>Contact Info</h1>
                <div className='flex flex-col'>
                    <Input inputId='number' inputType='text' label='Contact Number' />
                    <Input inputId='email' inputType='email' label='Email Address' />
                </div>
            </div>

            <div className='flex flex-col'>
                <div>
                    <h1 className='font-bold'>Address</h1>
                    <Input inputId='purok' inputType='text' label='Purok or Baranggay' />
                    <div className='flex flex-row'>
                        <Input inputId='city' inputType='text' label='City' />
                        <Input inputId='region' inputType='text' label='Region' />
                    </div>
                    <div className='flex flex-row'>
                        <Input inputId='zip' inputType='text' label='Zip Code' />
                        <Input inputId='nationality' inputType='text' label='Nationality' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between py-4 flex-row'>
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Sex</h1>
                    <div className='flex flex-col'>
                        <div className='flex flex-row-reverse justify-end'>
                            <label className='px-4' htmlFor="male">Male</label>
                            <input type="radio" name="sex" id="male"/>
                        </div>

                        <div className='flex flex-row-reverse justify-end'>
                            <label className='px-4' htmlFor="female">Female</label>
                            <input type="radio" name="sex" id="female"/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Religion</h1>
                    <Input 
                        inputType="text"
                        inputId="religion"
                        label="Enter Religion"
                    />
                </div>
            </div>
        </div>
    )
}