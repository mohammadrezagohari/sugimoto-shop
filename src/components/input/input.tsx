import React from "react";
import { IInput } from "./type";

const Input = (props: IInput) => {
    const { value, name, placeholder, type, onChange, className } = props;
    return (
        <div className="flex flex-col justify-center items-start">
            <input className={`${className} text-gray-first2 text-[12px] py-2 pl-12 pr-2 mt-3 border border-gray-first6 focus:outline-none placeholder:text-gray-first6 focus:border-gray-first4`}
                type={type ?? "text"}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
};

export default Input;