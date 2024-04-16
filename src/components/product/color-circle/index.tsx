// "use client"
import React from 'react'
import { ICirleColor } from './type'

const ColorCircle = (props: ICirleColor) => {
    const { classes, setSelectColor, styles, children } = props;
    return (
        <div onClick={setSelectColor} style={styles} className={` ${classes}  cursor-pointer w-[1.1rem] h-[1.1rem]  rounded-full flex justify-center items-center`}  >
            {children}
        </div>
    )
}

export default ColorCircle