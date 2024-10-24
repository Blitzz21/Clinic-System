import HeaderImg from '../../../img/HeaderPC.svg'

export default function Header() {
    return (
    <div className='flex justify-center bg-cover top-0 overflow-x-hidden'>
        <img className='bg-cover' src={HeaderImg} alt="Header" />
    </div>
    )
}