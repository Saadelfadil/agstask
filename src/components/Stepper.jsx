import {React, useEffect, useState} from "react";
import Issue from "./Progress/Issue"
import Department from "./Progress/Department";
import CheckListOne from "./Progress/CheckListOne"
import CheckListTwo from "./Progress/CheckListTwo"
import IssueForm from "./Progress/IssueForm"


const Stepper = ({setIsOpen}) => {
    const [formData, setFormData] = useState({
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
    })
    const [next, setNext] = useState(0);

    const handleDelete = () => {
        setIsOpen((prev) => prev = false);
    };

   

  return (
    <div>
        <ol className="flex items-center w-full mb-4 sm:mb-5">
            <li className={`flex w-full items-center ${next === 0 ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800" : "text-white-600 dark:text-white-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-white-100 after:border-4 after:inline-block dark:after:border-white-800"}`}>
                <div className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${next === 0 ? "dark:bg-blue-800 text-white" : "text-black"} shrink-0`}>
                1
                </div>
            </li>
            <li className={`flex w-full items-center ${next === 1 ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800" : "text-white-600 dark:text-white-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-white-100 after:border-4 after:inline-block dark:after:border-white-800"}`}>
                <div className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${next === 1 ? "dark:bg-blue-800 text-white" : "text-black"} shrink-0`}>
                2
                </div>
            </li>
            <li className={`flex w-full items-center ${next === 2 ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800" : "text-white-600 dark:text-white-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-white-100 after:border-4 after:inline-block dark:after:border-white-800"}`}>
                <div className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${next === 2 ? "dark:bg-blue-800 text-white" : "text-black"} shrink-0`}>
                3
                </div>
            </li>
            <li className={`flex w-full items-center ${next === 3 ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800" : "text-white-600 dark:text-white-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-white-100 after:border-4 after:inline-block dark:after:border-white-800"}`}>
                <div className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${next === 3 ? "dark:bg-blue-800 text-white" : "text-black"} shrink-0`}>
                4
                </div>
            </li>
            <li className={`flex mr-4 items-center ${next === 4 ? "text-blue-600 dark:text-blue-500" : "text-white-600 dark:text-white-500 "}`}>
                <div className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 ${next === 4 ? "dark:bg-blue-800 text-white" : "text-black"}  shrink-0`}>
                5
                </div>
            </li>
            <button onClick={handleDelete} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
        </ol>
        {next === 0 ? <Issue setNext={setNext} setFormData={setFormData} formData={formData}/> : next === 1 ? <Department setNext={setNext}  setFormData={setFormData} formData={formData}/> : next === 2 ? <CheckListOne setNext={setNext} setFormData={setFormData} formData={formData}/> : next === 3 ? <CheckListTwo setNext={setNext} setFormData={setFormData} formData={formData}/> : next === 4 ? <IssueForm setNext={setNext} setFormData={setFormData} formData={formData}/> : ""}
    </div>
  )
};

export default Stepper;
