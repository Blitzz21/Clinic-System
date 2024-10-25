import MedicalRecord from './MedicalRecord/MedicalRecord'
import VaccineRecord from './VaccineRecord/VaccineRecord'

export default function Page3() {
    return (
    <div className='flex flex-col w-full px-40'>
        <MedicalRecord />
        <VaccineRecord />
    </div>
    )
}