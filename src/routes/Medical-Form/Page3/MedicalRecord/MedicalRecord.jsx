import React, { useState } from "react";
import Plus from '../../../../img/Plus.svg'

export default function VaccineRecord() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [illness, setIllness] = useState("");
    const [medicalRecords, setMedicalRecords] = useState([]);
  
    const handleAddRecord = () => {
      if (!illness) {
        alert("Please select an illness");
        return;
      }
  
      // Check for duplicates
      if (medicalRecords.some(record => record.illness === illness)) {
        alert("This illness is already in the medical history");
        return;
      }
  
      // Add the illness if it's not a duplicate
      setMedicalRecords([...medicalRecords, { illness }]);
      setIllness("");  // Clear the input
      setShowOverlay(false);  // Hide the overlay after adding the record
    };

    return (
    <div className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
            <h1 className="">Medical History</h1>
            <div onClick={() => setShowOverlay(true)} className="flex justify-center flex-row cursor-pointer p-1 items-center border border-black rounded-full"><img src={Plus} alt="+" /><p className="text-black">Add Medical Illness</p></div>
        </div>

        <div>
        <table className="min-w-full mt-2 bg-white shadow-md rounded-md">
            <thead>
            <tr className="bg-[#091C98] text-white">
                <th className="p-3 rounded-tr-xl rounded-tl-xl font-normal">Illness</th>
            </tr>
            </thead>
            <tbody>
            {medicalRecords.length === 0 ? (
                <tr>
                <td colSpan="1" className="p-3 text-center">No Record Found</td>
                </tr>
            ) : (
                medicalRecords.map((record, index) => (
                <tr key={index}>
                    <td className="flex flex-row justify-between p-3 border"><div className="flex m-auto">{record.illness}</div><div className="text-gray-400 cursor-pointer" onClick={() =>setMedicalRecords(medicalRecords.filter(r => r.illness !== record.illness))}>✖</div></td>
                </tr>
                ))
            )}
            </tbody>
        </table>
        </div>

        {showOverlay && (
            <div className="MEDICALOVERLAY fixed inset-0 bg-gray-800 z-20 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center">
                <div className="bg-white rounded-lg p-6 z-30 w-80">
                    <h3 className="text-lg font-bold mb-4">Add Medical History</h3>
                    <label className="block mb-2">
                    Medical Condition:
                    <select value={illness} onChange={(e) => setIllness(e.target.value)} className="w-full mt-2 border-gray-300 p-2 rounded-md">
                        <option value="">Select Medical Condition</option>
                        <option value="Flu">Flu</option>
                        <option value="Asthma">Asthma</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Chickenpox">Chickenpox</option>
                        <option value="Hypertension">Hypertension</option>
                        <option value="Tuberculosis">Tuberculosis</option>
                    </select>
                    </label>
                    {/* Submit Button */}
                    <div onClick={handleAddRecord} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600">Submit</div>
                    {/* Cancel Button */}
                    <div onClick={() => setShowOverlay(false)} className="mt-2 text-red-500 w-full">✖</div>
                </div>
            </div>
        )}
    </div>
    )
}