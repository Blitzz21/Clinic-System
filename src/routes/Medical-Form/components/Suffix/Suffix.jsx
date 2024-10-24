export default function Suffix() {
    return (
    <div className="flex flex-row justify-start">
            <select name='suffix' className='border flex w-full flex-grow px-2 text-gray-400 focus:text-black rounded-md m-1 focus:outline-none focus:border-blue-400 transition-colors' id="suffix">
                <option value="None" disabled>Select suffix</option>
                <option value="None">None</option>
                <option value="Jr">Jr</option>
                <option value="Sr">Sr</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
            </select>
    </div>
    )
}