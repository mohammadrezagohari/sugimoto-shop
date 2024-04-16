import React from 'react'
import { IProduct } from './type'
import Link from 'next/link';
import Image from 'next/image';
import BasketIcon from "@/assets/icons/basket.svg";
function Product(props: IProduct) {
    const { id, slug, title, price, priceOff, image, brand, desc } = props;
    const mainImage = image[0];
    // typeof(image)==Array ? image[0] : image
    return (
        // <div className="flex flex-wrap lg:w-[18%] md:w-[25%] w-[45%] bg-white text-black m-2 p-2 rounded-lg">
        <div className="flex flex-wrap  bg-white text-black dark:bg-sky-900 dark:text-white m-2 p-2 rounded-lg">
            <Link href={`/products/${id}/${slug}`} className="flex justify-center w-full p-2">
                <Image src={mainImage} alt={title} width={150} height={150} className="w-full" />
            </Link>
            <Link className="flex w-full justify-start m-2" href={`/products/${id}/${slug}`}>
                <h3 className="text-[1em]">{title}</h3>
            </Link>
            <div className="flex w-full">
                <div className="w-[50%] flex justify-start">
                    <button className="bg-[#F3A51D] hover:bg-white p-1 rounded-lg border border-black">
                        <Image src={BasketIcon} alt={title} width={25} height={25} />
                    </button>
                </div>
                <div className="w-[50%] flex flex-wrap  justify-end">
                    <span className={` ${priceOff ? "border-t-2 border-[#9E9E9E] h-[1px] w-[4.5em] relative top-[.6em] " : null}`}></span>
                    <span className={`text-[#9E9E9E] text-[.7em] `}>
                        183,000 تومان
                    </span>
                    <span className="text-[#F3A51D] text-[.7em] ">
                        163,000 تومان
                    </span>
                </div>


            </div>
        </div>
    )
}

export default Product