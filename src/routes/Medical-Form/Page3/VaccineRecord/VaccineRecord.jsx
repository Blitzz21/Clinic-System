import React, { useState } from "react";
import Plus from '../../../../img/Plus.svg'

export default function VaccineRecord() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [vaccineDate, setVaccineDate] = useState("");
    const [vaccine, setVaccine] = useState("");
    const [vaccineRecords, setVaccineRecords] = useState([]);
  
    const handleAddRecord = () => {
      if (!vaccine) {
        alert("Please select a Vaccine");
        return;
      }
  
      // Check for duplicates
      if (vaccineRecords.some(record => record.vaccine === vaccine)) {
        alert("This vaccine is already in the record");
        return;
      }
  
      // Add the illness if it's not a duplicate
      setVaccineRecords([...vaccineRecords, { vaccine, vaccineDate }]);
      setVaccine("");  // Clear the input
      setShowOverlay(false);  // Hide the overlay after adding the record
    };

    return (
    <div className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
            <h1 className="">Vaccine Record</h1>
            <div onClick={() => setShowOverlay(true)} className="flex justify-center flex-row cursor-pointer p-1 items-center border border-black rounded-full"><img src={Plus} alt="+" /><p className="text-black">Add Vaccine</p></div>
        </div>

        <div>
        <table className="min-w-full mt-2 bg-white shadow-md rounded-md">
            <thead>
            <tr className="bg-[#091C98] text-white">
                <th className="p-3 rounded-tl-xl font-normal">Vaccine</th>
                <th className="p-3 rounded-tr-xl font-normal">Date</th>
            </tr>
            </thead>
            <tbody>
            {vaccineRecords.length === 0 ? (
                <tr>
                <td colSpan="2" className="p-3 text-center">No Record Found</td>
                </tr>
            ) : (
                vaccineRecords.map((record, index) => (
                <tr key={index}>
                    <td className="flex flex-row justify-between p-3 border"><div className="flex m-auto">{record.vaccine}</div></td>     
                    <td><div className="flex flex-row justify-between">{record.vaccineDate}<div className="text-gray-400 cursor-pointer" onClick={() =>setVaccineRecords(vaccineRecords.filter(r => r.vaccine !== record.vaccine))}>✖</div></div></td>
                </tr>
                ))
            )}
            </tbody>
        </table>
        </div>

        {showOverlay && (
            <div className="VACCINEOVERLAY fixed inset-0 bg-gray-800 z-20 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center">
                <div className="bg-white rounded-lg p-6 z-30 w-80 flex flex-col">
                    <div className="flex flex-row justify-between">
                        <h3 className="text-lg w-full font-bold">Add Vaccine</h3>
                        <div onClick={() => setShowOverlay(false)} className= "cursor-pointer ml-auto">✖</div>
                    </div>

                    <label className="block mb-2">
                    Vaccine:
                    <select value={vaccine} onChange={(e) => setVaccine(e.target.value)} className="w-full mt-2 border-gray-300 p-2 rounded-md">
                        <option value="">Select Medical Condition</option>
                        <option value="BCG">BCG</option>
                        <option value="OPV">OPV</option>
                        <option value="DPT">DPT</option>
                        <option value="Measles">Measles</option>
                        <option value="MMR">MMR</option>
                        <option value="Covid First Dose">Covid First Dose</option>
                        <option value="Covid Second Dose">Covid Second Dose</option>
                        <option value="Covid Booster 1">Covid Booster 1</option>
                        <option value="Covid Booster 2">Covid Booster 2</option>
                        <option value="Chicken Pox">Chicken Pox</option>
                        <option value="Flu">Flu</option>
                        <option value="Hepatitis A">Hepatitis A</option>
                        <option value="Hepatitis B">Hepatitis B</option>
                        <option value="Pnuemococcal">Pnuemococcal</option>
                        <option value="">Others (Please specify)<input type="text" /></option>
                    </select>
                    <input onChange={(e) => setVaccineDate(e.target.value)} type="date" value={vaccineDate} name="vaccineDate" id="vaccineDate" />
                    </label>
                    {/* Submit Button */}
                    <div onClick={handleAddRecord} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600">Submit</div>         
                </div>
            </div>
        )}
    </div>
    )
}