export default function PersonalHistory() {
    return (
    <div className="flex flex-col p-2">
        <h1 className="font-bold">Personal/Social History:</h1>
        <div className="flex flex-col">
            <p>1. Do you smoke cigarettes/tabacco products?</p>
            <div className="flex flex-row justify-evenly py-2">
                <div className="flex flex-row-reverse">
                    <label className="px-1" htmlFor="choice">Yes</label>
                    <input type="radio" name="choice" id="yes" />
                </div>
                <div className="flex flex-row-reverse">
                    <label className="px-1" htmlFor="choice">No</label>
                    <input type="radio" name="choice" id="no" />
                </div>
                <input className="outline-none" type="text" placeholder="Sticks per day?" />
                <input className="outline-none" type="text" placeholder="Since when?" />
            </div>
        </div>

        <div>
            <p>2. Do you drink alcoholic beverages?</p>
            <div className="flex flex-row justify-evenly py-2">
                <div className="flex flex-row-reverse">
                    <label className="px-1" htmlFor="choice">Yes</label>
                    <input type="radio" name="choice" id="yes" />
                </div>
                <div className="flex flex-row-reverse">
                    <label className="px-1" htmlFor="choice">No</label>
                    <input type="radio" name="choice" id="no" />
                </div>
                <input className="outline-none" type="text" placeholder="How often?" />
                <input className="outline-none" type="text" placeholder="How much?" />
            </div>
        </div>
    </div>
    )
}