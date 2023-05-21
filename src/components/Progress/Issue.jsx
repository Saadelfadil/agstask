import React, { useState } from "react";
import Department from "./Department"

const Issue = ({setNext, setFormData, formData}) => {

    const onChangeHandler = (e) => {
        console.log(e)
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Issue</h3>
        <div className="block-flex rounded-md shadow-sm mb-6" role="group">
            <input onClick={onChangeHandler} name="issue" value="Urgent" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"/>
            <input onClick={onChangeHandler} name="issue" value="Typical" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"/>
        </div>
        <button onClick={() => setNext((prev) => prev = 1)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next Step: Department
        </button>
    </div>
  )
};

export default Issue;
