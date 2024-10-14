import Login from './Login'
import BG from './BG'

export default function LoginPage() {
    return (
        <>
            <div className='flex max-sm:justify-center w-screen h-screen max-sm:items-center flex-row-reverse overflow-hidden'>
                <Login />
                <BG />
            </div>
        </>
    )
}