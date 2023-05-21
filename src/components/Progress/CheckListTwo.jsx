import React from "react";

const CheckListTwo = ({setNext, setFormData, formData}) => {
    const onChangeHandler = (e) => {
        console.log(e)
        if (e.target.name === "issuers")
        {
            let formCopy = {...formData}
            if (e.target.checked)
                formCopy.issuers.push(e.target.value)
            else
            {
                formCopy.issuers = formCopy.issuers.filter(part => part !== e.target.value)
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

    console.log("hani : ", formData)
  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose : whome</h3>
        <div className="flex flex-wrap justify-center gap-4">
            <label className="relative cursor-pointer">
                <input type="checkbox" value="Elon Mask" onChange={onChangeHandler}  className="peer sr-only" name="issuers" />
                <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                </span>
                <div className="overflow-hidden w-16 h-16 rounded-full bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="Elon Mask" className="h-16 w-16 object-cover" />
                </div>
                </div>
            </label>
            <label className="relative cursor-pointer">
                <input type="checkbox" value="Steve Jobs" onChange={onChangeHandler}  className="peer sr-only" name="issuers" />
                <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                </span>
                <div className="overflow-hidden w-16 h-16 rounded-full bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                <div>
                    <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRgg_-fCyJGRXk6aQ5s8-fVsbAaHD2I5bNh1EOwL9g2HDJj-88pzIQ2_V6fW-e1ARwLfnHR-IL1ltFvHGk" alt="Steve Jobs" className="h-16 w-16 object-cover" />
                </div>
                </div>
            </label>
            <label className="relative cursor-pointer">
                <input type="checkbox" value="Mark Zuckerberg" onChange={onChangeHandler}  className="peer sr-only" name="issuers" />
                <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                </span>
                <div className="overflow-hidden w-16 h-16 rounded-full bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Mark Zuckerberg" className="h-16 w-16 object-cover" />
                </div>
                </div>
            </label>
            <label className="relative cursor-pointer">
                <input type="checkbox" value="Bill Gates"  onChange={onChangeHandler} className="peer sr-only" name="issuers" />
                <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                </span>
                <div className="overflow-hidden w-16 h-16 rounded-full bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                <div>
                    <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi4a8NzG1ocCbgUUZxxDLocQwDQvhod4gHC3aRRg3juK0LDsZHECn7AwMJq8WUmPFLai9IJhY5YWNLRys" alt="Bill Gates" className="h-16 w-16 object-cover" />
                </div>
                </div>
            </label>
            <label className="relative cursor-pointer">
                <input type="checkbox" value="Jeff Bezos" onChange={onChangeHandler} className="peer sr-only" name="issuers" />
                <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                </span>
                <div className="overflow-hidden w-16 h-16 rounded-full bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
                <div>
                    <img src="https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg" alt="Jeff Bezos" className="h-16 w-16 object-cover" />
                </div>
                </div>
            </label>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => setNext((prev) => prev = 2)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Back Step
            </button>
            <button onClick={() => setNext((prev) => prev = 4)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Next Step: Pick
            </button>
        </div>
    </div>
  )
};

export default CheckListTwo;
