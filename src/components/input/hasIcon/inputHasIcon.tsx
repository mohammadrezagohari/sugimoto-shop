import React from 'react'
import { IInputHasIcon } from './type'
import "./style.css"

const InputHasIcon = (props: IInputHasIcon) => {
    const { value, name, placeholder, type, onChange, className, icon, children } = props;
    return (
        <div className="relative  items-center justify-between hidden lg:flex md:flex">
            <input type="text"
                // className="pl-10 pr-4 py-2 border rounded-lg input-search"
                className={`${className} py-3 pl-4 pr-11  `}
                placeholder={placeholder} />
            <div className="absolute flex items-center pointer-events-none  top-3 right-4">
                {children}
                {/* <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg> */}
            </div>
        </div>
    )
}

export default InputHasIcon