import React from "react";
import { IInputHasLable } from "./type";

const InputHasLable = (props: IInputHasLable) => {
    const { value, label, name, placeholder, type, onChange } = props;
    return (
        <div className="flex flex-col justify-center items-start">
            {label && <label className="font-YekanBakhRegular text-gray-first4 text-[12px]" htmlFor="input-field">{label}</label>}
            <input className='font-YekanBakhLight text-gray-first2 text-[12px] py-2 pl-12 pr-2 mt-3 border border-gray-first6 focus:outline-none placeholder:text-gray-first6 focus:border-gray-first4'
                type={type ?? "text"}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
};

export default InputHasLable;