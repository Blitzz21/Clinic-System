import Input from '../../../components/Input/Input';
import Suffix from '../components/Suffix/Suffix';

export default function Page1() {
    return (
        <div className="p-4">
            <div className="flex flex-col w-full">
                <h1 className="font-bold">Name</h1>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <Suffix />
                    <Input label="First Name" inputid="firstname" inputType="text" />
                </div>
                
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                    <Input label="Middle Name" inputid="middlename" inputType="text" />
                    <Input label="Last Name" inputid="lastname" inputType="text" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between flex-wrap mt-4">
                <div className="m-2 md:flex-1">
                    <h1 className="font-bold">Date of Birth</h1>
                    <input
                        className="border w-full p-1 rounded-md text-gray-400 focus:text-black focus:outline-none focus:border-blue-400 transition-colors cursor-pointer"
                        type="date"
                        name="birthday"
                        id="bday"
                        required
                    />
                </div>

                <div className="m-2 md:flex-1">
                    <h1 className="font-bold">Program and Year</h1>
                    <select
                        className="border w-full p-1 text-gray-400 focus:text-black rounded-md focus:outline-none focus:border-blue-400 transition-colors"
                        name="Program"
                        id="program"
                    >
                        <option value="None" selected disabled>Select Program and Year</option>
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

            <div className="flex flex-col mt-4">
                <h1 className="font-bold">Contact Info</h1>
                <div className="flex flex-col space-y-4">
                    <Input inputId="number" inputType="text" label="Contact Number" />
                    <Input inputId="email" inputType="email" label="Email Address" />
                </div>
            </div>

            <div className="flex flex-col mt-4">
                <h1 className="font-bold">Address</h1>
                <Input inputId="purok" inputType="text" label="Purok or Baranggay" />
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                    <Input inputId="city" inputType="text" label="City" />
                    <Input inputId="region" inputType="text" label="Region" />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                    <Input inputId="zip" inputType="text" label="Zip Code" />
                    <Input inputId="nationality" inputType="text" label="Nationality" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col">
                    <h1 className="font-bold">Sex</h1>
                    <div className="flex flex-row items-center">
                        <input type="radio" name="sex" id="male" className="mr-2" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <input type="radio" name="sex" id="female" className="mr-2" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">Religion</h1>
                    <Input inputType="text" inputId="religion" label="Enter Religion" />
                </div>
            </div>
        </div>
    );
}
