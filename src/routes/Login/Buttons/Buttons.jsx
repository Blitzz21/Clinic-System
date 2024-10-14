export default function Buttons() {
    return (
    <div className="flex flex-row justify-between px-8 items-center">
        <div>
            <input className="accent-[#091C98] scale-[1.5] cursor-pointer" type="checkbox" name="remember" id="rem" placeholder="Remember Me"/>
            <label className="px-2 text-[#707070] text-sm align-middle cursor-pointer" htmlFor="rem">Remember Me</label>
        </div>
        <a className="text-[#091C98] cursor-pointer text-xs text-center" href="http://" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
    </div>
    )
}