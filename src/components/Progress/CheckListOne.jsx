import React from "react";
import partner_1 from "../../assets/partner_1.png"
import partner_2 from "../../assets/partner_2.png"
import partner_3 from "../../assets/partner_3.png"

const CheckListOne = ({setNext, setFormData, formData}) => {
    const onChangeHandler = (e) => {
        console.log(e)
        if (e.target.name === "partners")
        {
            let formCopy = {...formData}
            if (e.target.checked)
                formCopy.partners.push(e.target.value)
            else
            {
                formCopy.partners = formCopy.partners.filter(part => part !== e.target.value)
            }
            setFormData(formCopy)
        }
        else
        {
            setFormData(() => ({
                ...formData,
                [e.target.name]: e.target.value
            }))
        }
    }
    
  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose : partners</h3>
        <ul className="grid w-full gap-6 md:grid-cols-3">
            <li>
                <input onChange={onChangeHandler} name="partners" type="checkbox" id="react-option" value="partner_1" className="hidden peer " required="" />
                <label for="react-option" className="flex items-center justify-center w-full h-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="block">
                        <img src={partner_1} alt="" />
                    </div>
                </label>
            </li>
            <li>
                <input onChange={onChangeHandler} name="partners" type="checkbox" id="flowbite-option" value="partner_2" className="hidden peer" />
                <label for="flowbite-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                        <img src={partner_2} alt="" />
                        </div>
                    </label>
                </li>
                <li>
                    <input onChange={onChangeHandler} name="partners" type="checkbox" id="angular-option" value="partner_3" className="hidden peer" />
                    <label for="angular-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <img src={partner_3} alt="" />
                        </div>
                    </label>
                </li>
        </ul>
        <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => setNext((prev) => prev = 1)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Back Step
            </button>
            <button onClick={() => setNext((prev) => prev = 3)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Next Step: Pick Whome
            </button>
        </div>
    </div>
  )
};

export default CheckListOne;
