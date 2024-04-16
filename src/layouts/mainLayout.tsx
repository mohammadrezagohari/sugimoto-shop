import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar/navbar";
import { useTheme } from 'next-themes'

import React from "react";

interface IMainLayoutProps {
    children: React.ReactNode;
}
const MainLayout = (props: IMainLayoutProps) => {
    const { children } = props;
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <header className="flex flex-wrap w-full  px-10">
                <Menu />
                <hr className="bg-[#9E9E9E] w-full" />
                <Navbar active="Home" />
            </header>
            <main>  {children} </main>
        </div>
    );
};
export default MainLayout;
