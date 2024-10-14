export default function Selection() {
    return (
    <div>
        <ul className="flex flex-row bg-[#FFFFFF] shadow-md text-center justify-center items-center my-8 py-2 px-2 rounded-xl outline outline-1 outline-[#EEEEEE]">
            <li><a className="p-2 mx-1 text-center align-middle hover:bg-[#091C98] hover:text-white rounded-2xl transition hover:ease-in-out duration-500" href="">Home</a></li>
            <li><a className="p-2 mx-1  text-center align-middle hover:bg-[#091C98] hover:text-white rounded-2xl transition hover:ease-in-out duration-500" href="">Account</a></li>
            <li><a className="p-2 mx-1 text-center align-middle hover:bg-[#091C98] hover:text-white rounded-2xl transition hover:ease-in-out duration-500" href="">Notification</a></li>
        </ul>
    </div>
    )
}