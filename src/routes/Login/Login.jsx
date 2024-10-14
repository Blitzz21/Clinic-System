import {  Logo, Text, Input, Buttons, Login_button } from './molecules'

export default function Container() {
    return (
        <form className='flex p-4 max-sm:p-0 flex-col justify-center align-middle w-[1000px] max-md:w-[678px] max-sm:w-[320px] max-sm:h-[568px] h-dvh max-lg:rounded-none bg-[#EEEEEE]/80 z-50 max-sm:rounded-2xl' action=""> 
            <Logo />
            <Text />
            <Input />
            <Buttons />
            <Login_button />
        </form>
    )
}