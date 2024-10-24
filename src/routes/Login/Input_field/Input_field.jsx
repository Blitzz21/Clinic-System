import Icon_mail from './Icons/Icon_mail'
import Icon_lock from './Icons/Icon_lock'
import Input from '../../../components/Input/Input'

export default function Input_field() {
    return (
    <div className="flex flex-col p-6 gap-4 bg-opacity-100">
        <div className='flex items-center'>
            <Icon_mail />
            <input className="bg-[#FFFFFF] border-solid border-[#D9D9D9] w-full rounded-md px-12 py-5 text-[#000000]/100 text-base focus:border-[#091C98] focus:outline-none focus:ring-2 opacity-100" type="text" name="idnumber" id="id" placeholder="Enter ID Number" required/>
        </div>

        <div className='flex items-center'>
            <Icon_lock />
            <input className="bg-[#FFFFFF] border-solid border-[#D9D9D9] w-full rounded-md px-12 py-5 text-[#000000]/100 text-base focus:border-[#091C98] focus:outline-none focus:ring-2 opacity-100" type="password" name="password" id="ps" placeholder="Enter Password" required/>
        </div>
    </div>
    )
}