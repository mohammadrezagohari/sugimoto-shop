"use client";
import React, {
    Fragment,
    useEffect,
    useState,
    useCallback,
    useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/product/counter/index";
// import { useAppContext } from "@/providers/main/appContext";
import { FaCheck } from "react-icons/fa6";
import ColorCircle from "@/components/product/color-circle/index";
// import Modal from "@/components/layout/ui/modals/notive-type";
import { IDetails } from "./type";
import MainContext from "@/providers/main/mainContext";

const ProductDetails = (props: IDetails) => {
    const { product } = props;
    const redbar = useRef(null);
    const [isLike, setIsLike] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [selectSize, setSelectSize] = useState(null);
    const [slide, setSlide] = useState(0);
    const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
    const [isSizeModalSmOpen, setIsSizeModalSmOpen] = useState(false);
    const [isShopModalOpen, setIsShopModalOpen] = useState(false);
    const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
    const [isActiveNotif, setIsActiveNotif] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const formattedPrice = Number(product?.price).toLocaleString();

    return (
        <>
            <ul className="w-full flex flex-col gap-8 lg:gap-[2.0833333333333335vw] px-[1rem] lg:px-auto ">
                <li>
                    <h1 className="text-a21 font-RokhSemiBold text-[1.375rem] lg:text-[1.9vw] leading-[1.76rem] lg:leading-[2.6vw] mt-6 lg:mt-[2.4vw]">
                        {product?.title}
                    </h1>

                    <span className="block mt-2 mb-4 lg:mt-[0.5208333333333334vw] lg:mb-[1.0416666666666667vw] font-yekanBakhtFaNumRegular text-justify text-aDarkRed text-xs md:text-sm lg:text-[0.91vw] leading-6 lg:leading-[1.5625vw]  ">
                        کد محصول : 654488{" "}
                    </span>

                    <ul className="flex items-center justify-start gap-4 lg:gap-[0.8333333333333334vw] ">
                        <li className=" flex items-center gap-1">
                            <Image src={product?.image[0]} alt={product?.title} width={200} height={200} />
                        </li>

                    </ul>
                </li>

                <li>
                    <span className="block mb-4 lg:mb-[1.0416666666666667vw] font-yekanBakhtFaNumSemiBold text-justify text-a4c text-base  md:text-lg lg:text-[1.171875vw] leading-6 lg:leading-[1.81640625vw]  ">
                        {" "}
                        توضیحات کوتاه{" "}
                    </span>
                    <p className=" font-yekanBakhtFaNumRegular text-justify text-a92 text-xs  md:text-sm lg:text-[0.91vw] leading-6 lg:leading-[1.625vw]  ">
                        {product?.desc}
                    </p>
                </li>

                <li>
                    <span className="block mb-4 lg:mb-[1.0416666666666667vw] font-yekanBakhtFaNumSemiBold text-justify text-a4c text-base  md:text-lg lg:text-[1.171875vw] leading-6 lg:leading-[1.81640625vw]  ">
                        {" "}
                        سایز بندی
                    </span>
                    <ul className="flex items-start flex-wrap gap-1 lg:gap-[0.7vw] ">
                        {product?.size.map((s: any, i: any) => (
                            <li
                                key={i}
                                onClick={() => setSelectSize(i)}
                                className={` ${selectSize == i
                                    ? "text-af bg-aDarkRed"
                                    : "text-a70 bg-transparent"
                                    } cursor-pointer flex items-center justify-center rounded-full w-[2.1875rem] h-[2.1875rem] lg:w-[2.6vw] lg:h-[2.6vw] text-sm lg:text-[1.05vw] text-yekanBakhtFaNumRegular`}
                            >
                                {" "}
                                {s}{" "}
                            </li>
                        ))}
                        <li
                            onClick={() => {
                                setIsSizeModalOpen(true);
                                setIsSizeModalSmOpen(true);
                            }}
                        >
                            <span className="cursor-pointer font-yekanBakhtFaNumRegular text-justify text-aDarkRed text-sm  md:text-base lg:text-[1.04vw]  ">
                                راهنمای سایز
                            </span>
                        </li>
                    </ul>
                </li>

                <li>
                    <span className="block mb-4 lg:mb-[1.0416666666666667vw] font-yekanBakhtFaNumSemiBold text-justify text-a4c text-base  md:text-lg lg:text-[1.171875vw] leading-6 lg:leading-[1.81640625vw] ">
                        رنگبندی
                    </span>
                    <ul className="flex items-start flex-wrap gap-2">
                        {product?.colors.map((c: any, i: any) => (
                            <li key={i}>
                                <ColorCircle
                                    styles={{ background: `${c}`, outlineColor: `${c}` }}
                                    setSelectColor={() => setSlide(i)}
                                    classes={`w-[35px] h-[35px] lg:w-[2.4vw] lg:h-[2.4vw] ${slide === i ? "outline outline-offset-2 outline-1" : ""
                                        }`}
                                    color={`${c}`}
                                >
                                    {slide === i ? (
                                        <FaCheck
                                            className={`text-2xl ${c == "#ECECEC" ? "text-a21 " : "text-white"
                                                }`}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </ColorCircle>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className=" hidden lg:flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[1.0416666666666667vw]">
                    <Counter
                        classes={
                            "!w-max lg:!w-[5.46875vw] !py-[0.625rem] lg:!py-[0.66125vw]   "
                        }
                    />
                    <button
                        onClick={() => {
                            setIsShopModalOpen(true);
                        }}
                        // onClick={addItem}
                        className={`cursor-pointer gap-3 hover:opacity-75 inline-flex justify-center items-center lg:w-[16.9921875vw] bg-a21 text-af border font-yekanBakhtFaNumRegular transition-all duration-500 text-[14px] py-[0.625rem] lg:py-[0.78125vw]  border-a21 `}
                    >
                        <span>
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.2644 17.9152H7.30788C4.75258 17.9152 2.79224 16.9923 3.34907 13.2776L3.99743 8.24323C4.34068 6.38968 5.52298 5.6803 6.56036 5.6803H15.0424C16.0951 5.6803 17.2087 6.44307 17.6054 8.24323L18.2537 13.2776C18.7266 16.5727 16.8197 17.9152 14.2644 17.9152Z"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.376 5.49814C14.376 3.50974 12.7641 1.8978 10.7757 1.8978C9.81822 1.89377 8.89854 2.2713 8.22005 2.94693C7.54156 3.62256 7.16016 4.54063 7.16016 5.49814"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.253 9.25128H13.2148"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.3897 9.25128H8.35156"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span> افزودن به سبد خرید </span>
                    </button>
                    <span className=" font-yekanBakhtFaNumSemiBold text-justify text-a4c text-base  md:text-lg lg:text-lg  ">
                        {" "}
                        {/* 698,000 تومان */}
                        {formattedPrice} تومان
                    </span>
                </li>
            </ul>
            {/* <FixedBar
                formattedPrice={formattedPrice}
                setIsShopModalOpen={setIsShopModalOpen}
            />

            <SizeBoxSm
                sizes={sizes}
                isSizeModalSmOpen={isSizeModalSmOpen}
                setIsSizeModalSmOpen={setIsSizeModalSmOpen}
            /> */}
        </>
    );
};

export default ProductDetails;

interface ISizeTable {
    sizes: any;
}
function SizeTable(props: ISizeTable) {
    const { sizes } = props;
    return (
        <div className=" relative overflow-x-auto pt-[2rem] lg:pt-[3.2552083333333335vw] ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-[0.8rem] lg:text-[1.171875vw] font-RokhRegular text-af bg-a25 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            سایز
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            قد لباس
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            دور کمر
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            قد آستین
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            عرض شانه
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            دور بازو
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* divide-x divide-ad9  */}
                    {sizes.map((s: any, i: any) => (
                        <tr
                            key={s.id}
                            className="text-center odd:bg-af8 odd:dark:bg-gray-900 even:bg-aec even:dark:bg-gray-800 text-a25 text-[0.875rem] lg:text-[1.3020833333333333vw] font-RokhSemiBold "
                        >
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">{s.size}</td>
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">
                                {s.dressLength}
                            </td>
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">{s.waist}</td>
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">
                                {s.sleeveLength}
                            </td>
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">
                                {s.shoulderWidth}
                            </td>
                            <td className="px-[1.5625vw] !py-[0.78125vw] ">
                                {s.aroundTheArm}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


