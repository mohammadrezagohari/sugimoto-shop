import React from 'react'
import { ITab } from './type';


const Tab = (props: ITab) => {
    const { children, className, selectedId, id, onClick } = props;
    return (
        <button className={` p-2 ${selectedId == id ? " dark:bg-red-600 bg-[#F3A51D] text-white" : "bg-white dark:bg-black"}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Tab;