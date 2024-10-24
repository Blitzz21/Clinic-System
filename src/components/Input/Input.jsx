export default function Input({ label, inputId, inputType }) {
    return (
        <div className="flex m-1.5 flex-grow">
            <div class="relative w-full z-10">
                <input id={inputId} type={inputType} className="peer caret-blue-400 w-full block flex-grow appearance-none border rounded-md bg-transparent px-2 py-2.5 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                <label htmlFor={inputId} className="absolute top-3 bg-white z-10 px-1 ml-1 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">{label}</label>
            </div>
        </div>
    )
}