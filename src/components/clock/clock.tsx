import React from 'react'
import { IClock } from './type'
import Image from 'next/image';
import Watch from "@/assets/icons/clock.svg"

const Clock = (props: IClock) => {
    const { rightText, children } = props;

    return (
        <div className="hidden justify-center md:flex lg:flex sm:flex">
            <span className="text-[#7B7B7B]">{rightText}</span>
            <Image src={Watch} width={50} height={50} alt="ساعت" />
            <span className="text-[#7B7B7B]">{children}</span>
        </div>
    )
}

export default Clock