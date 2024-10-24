import SMC from '../../img/SMC.svg'
import Triangle1 from '../../img/triangle1.svg'
import Triangle2 from '../../img/triangleleftmiddle.svg'
import Triangle3 from '../../img/trianglebottommiddle.svg'
import Triangle4 from '../../img/rectanglebottom.svg'
import Triangle5 from '../../img/trianglerighttop.svg'
import Triangle6 from '../../img/trianglerightmiddle.svg'
import Triangle7 from '../../img/trianglemiddleright.svg'

export default function Header() {
    return (
        <div className="flex flex-row">
            <div className='flex'>
                <Triangle1 />
                <Triangle2 />
                <Triangle3 />
                <Triangle4 />
            </div>

            <div className='flex flex-row'>
                <div>
                    <img src={SMC} alt="SMC Logo" />
                </div>
                <h1><b>SMCTI - CLINIC</b></h1>
                <p><b>Q</b>uality <b>T</b>ransformative <b>I</b>gnacian <b>M</b>arian <b>E</b>ducation</p>
            </div>

            <div className='flex'>
                <Triangle5 />
                <Triangle6 />
                <Triangle7 />
            </div>
        </div>
    )
}