import HeaderImg from '../../../img/HeaderPC.svg'

export default function Header() {
    return (
    <div className='flex justify-center bg-cover'>
        <img className='bg-cover' src={HeaderImg} alt="Header" />
    </div>
    )
}