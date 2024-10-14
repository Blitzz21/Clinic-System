import Bg from '../../img/Loginbg.png'

export default function BG() {
    return (
      <div className='max-sm:absolute max-md:flex z-0 overflow-hidden bg-[#091C98] object-cover'>
        <img className='z-0 w-dvw h-dvh mix-blend-hard-light object-fill' src={Bg} alt="SMC BG" />
      </div>
    )
}