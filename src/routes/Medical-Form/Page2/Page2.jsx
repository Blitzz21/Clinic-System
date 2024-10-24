import Father from './Father/Father'
import Mother from './Mother/Mother'
import Guardian from './Guardian/Guardian'

export default function Page2() {
    return (
    <div className='flex flex-col w-full px-32'>
        <Father />
        <Mother />
        <Guardian />
    </div>
    )
}