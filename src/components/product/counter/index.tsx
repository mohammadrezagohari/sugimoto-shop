"use client";
import React, { useState } from "react";
import { ICounter } from "./type";
const Counter = (props: ICounter) => {
    const { classes } = props;
    const [count, setCount] = useState(1);
    return (
        <div className={`${classes} border border-ab8 flex items-center justify-between px-3 py-1 lg:px-3 lg:py-[0.2604166666666667vw] gap-[1.0416666666666667vw] lg:gap-[1.0416666666666667vw]`} >
            <button
                type="button"
                onClick={() => setCount((prev) => prev + 1)}
                className="text-ab8 text-[0.8rem] lg:text-[0.9rem] "
            >
                {" "}
                +{" "}
            </button>
            <span className="text-a70 leading-4 lg:leading-6 text-justify text-[0.8rem] lg:text-[0.9rem] ">
                {count}
            </span>
            <button
                type="button"
                onClick={() => {
                    if (count == 1) {
                        return null;
                    } else {
                        setCount((prev) => prev - 1);
                    }
                }}
                className="text-ab8 text-[0.8rem] lg:text-[0.9rem] "
            >
                {" "}
                -{" "}
            </button>
        </div>
    );
};

export default Counter;
