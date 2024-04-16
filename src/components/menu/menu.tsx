import React from 'react'
import { IMenu } from './type'
import Image from 'next/image';
import Logo from "@/assets/images/logo.svg";
import InputHasIcon from '../input/hasIcon/inputHasIcon';
import SearchIcon from "@/assets/icons/search.svg"
import Clock from '@/components/clock/clock';
import CircleButton from '../button/circle/circle';
import HeartIcon from "@/assets/icons/heart.svg";
import BasketIcon from "@/assets/icons/basket.svg";
import Avatar from "@/assets/images/avatar.jpg";
import Changer from "@/components/button/theme/changer";
const Menu = (props: IMenu) => {
    const changeText = () => {
        return "";
    }
    return (
        <div className="flex w-full h-[100px] items-center justify-between">
            <div className="flex">
                <div className="logo-container w-[100px] p-2 ml-2">
                    <Image width={200} src={Logo} alt="Logo Saat Kook" />
                </div>
                <InputHasIcon name="search" type="text" onChange={changeText} placeholder="شما دنبال چیی؟!"
                    className="rounded-2xl bg-[#DEDEDE] placeholder-[#9E9E9E] text-[#9E9E9E] " >
                    <Image src={SearchIcon} height={20} width={20} alt="icon search" />
                </InputHasIcon>
            </div>

            <Clock rightText="این">
                همیشه
                <br />
                کوکه ...
            </Clock>


            <div className="flex justify-around w-[20vw]">
                <CircleButton containerClass="hidden lg:flex md:flex" className="bg-[#DEDEDE] p-2 lg:p-3 w-[2em] lg:w-[3em]" >
                    <Image src={HeartIcon} height={25} width={25} alt="مورد علاقه ها" className="" />
                </CircleButton>
                <CircleButton containerClass="hidden lg:flex md:flex" className=" bg-[#DEDEDE] p-2 lg:p-3 w-[2em] lg:w-[3em]" hasQuanity={true} quanity={2}>
                    <Image src={BasketIcon} height={25} width={25} alt="سبد خرید" />
                </CircleButton>
                <CircleButton className="bg-[#DEDEDE] rounded-full w-[2em] lg:w-[3em]">
                    <Image src={Avatar} fill={true} className="rounded-full w-[25px]" alt="سبد خرید" />
                </CircleButton>
                <Changer />
            </div>
        </div>
    )
}

export default Menu;
