import React from "react";

const IssueForm = ({setNext, setFormData, formData}) => {

    const onChangeHandler = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.name === "upload_file" ? e.target.files[0] : e.target.value
        }))
    }
    
    const handleDelete = (e) => {
        e.preventDefault()
        setFormData(() => ({
            issue: "",
            department: "",
            partners: [],
            issuers: [],
            issueName: "",
            choice_1: "",
            choice_2: "",
            choice_3: "",
            upload_file: {},
            note: "",
            date: ""
        }))
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log("Saved");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submited");
    }

  return (
    <div className="flex justify-center">
        <form className="flex flex-col gap-8">
            <div className="relative z-0 mb-6">
                <input type="text" value={formData.issueName} onChange={onChangeHandler} name="issueName" id="issueName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Issue name" required />
            </div>
            <div className="flex justify-center items-center gap-4">
                <input type="text" onChange={onChangeHandler} value={formData.choice_1}  name="choice_1" id="choice_1" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Choice 1" required />
                <input type="text" onChange={onChangeHandler} value={formData.choice_2}  name="choice_2" id="choice_2" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Choice 2" required />
                <input type="text" onChange={onChangeHandler} value={formData.choice_3}  name="choice_3" id="choice_3" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Choice 3" required />
                <div className="flex items-center justify-center">
                    <label for="dropzone-file" className="flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center p-2">
                            <svg aria-hidden="true" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        </div>
                        <input id="dropzone-file" onChange={onChangeHandler} name="upload_file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div>
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your note</label>
                <textarea id="message" onChange={onChangeHandler} value={formData.note} name="note" rows="4" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your note here..."></textarea>
            </div>
            
            
            <div className="w-full flex justify-center items-center">
                <input type="date" onChange={onChangeHandler} name="date" value={formData.date} className="bg-gray-50 max-w-sm  border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
            </div>
            <div className="flex gap-4 justify-center">
                <button onClick={() => setNext((prev) => prev = 3)}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back Step</button>
                <button type="submit" onClick={handleDelete} className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center">Delete</button>
                <button type="button" onClick={handleSave} className="text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-900">Save</button>
                <button type="button" onClick={handleSubmit} className="text-white bg-green-700 hover:bg-green-800   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-green-600  dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div>
        </form>

    </div>
  )
};

export default IssueForm;
