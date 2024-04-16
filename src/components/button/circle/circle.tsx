import React from 'react'
import { ICircleButton } from './type';


const CircleButton = (props: ICircleButton) => {
    const { children, hasQuanity = false, quanity, className, onClick = () => { }, containerClass } = props;
    return (
        <>
            <div className={`${containerClass} relative`}>
                <button className={`${className} rounded-full`} onClick={onClick}>
                    {children}
                </button>
                {hasQuanity ? <span className="absolute bg-red-700 text-white rounded-full w-[1.5em] h-[1.5em] lg:h-[2em] lg:w-[2em] top-0 pt-[.3em] pr-[.4em]  right-0 lg:px-[0.7em] lg:py-[0.4em] text-[0.7em]">{quanity}</span> : null}
            </div>
        </>
    )
}

export default CircleButton;