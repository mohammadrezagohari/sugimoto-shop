/** @format */
"use client"
import React, { ReactElement, useEffect } from "react";
import { Card, Skeleton, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "@/layouts/mainLayout";
import Image from "next/image";
import Product from "@/components/product/product";
import Tab from "@/components/button/tab/tab";
import collection from "@/assets/data/api/products.json";

const Products = () => {
    const [isLoaded, setIsLoaded] = React.useState<boolean>(true);
    const [selectedId, setSelectedId] = React.useState<number>(0);
    const router = useRouter();

    const toggleLoad = (): void => {
        setIsLoaded(!isLoaded);
    };
    useEffect(() => {
        console.log(router.query)
    }, [router]);



    const handleClick = (id: number) => {
        /// shallow push to url
        setSelectedId(id);
        return router.push(`products?id=${id}`, undefined, { shallow: true })
        // return router.push(`products/${id}`)
        /// for login you have to use router.replace("/dashboard");
        /// for reload our page you have to use router.reload();
        /// for back to past url you have to use router.back();

    }

    return (
        <div className="bg-[#F5F5F5] dark:bg-black py-2 px-10">
            <div className="w-full p-2 bg-white dark:bg-sky-950 dark:text-white">
                <ul className="flex justify-around ">
                    <li>
                        <Tab id={1} selectedId={selectedId} onClick={() => handleClick(1)}>Apple</Tab>
                        {/* <button className={` p-2 ${selectedId == 1 ? "bg-red-600 dark:bg-[#F3A51D]" : "bg-white dark:bg-black"}`} onClick={() => handleClick(1)} ></button> */}
                    </li>
                    <li>
                        <Tab id={2} selectedId={selectedId} onClick={() => handleClick(2)}>Xiami</Tab>

                        {/* <button className="p-2" onClick={() => handleClick(2)} style={{ backgroundColor: selectedId == 2 ? "red" : "white" }}>Xiami</button> */}
                    </li>
                    <li>
                        <Tab id={3} selectedId={selectedId} onClick={() => handleClick(3)}>Samsung</Tab>

                        {/* <button className="p-2" onClick={() => handleClick(3)} style={{ backgroundColor: selectedId == 3 ? "red" : "white" }}>Samsung</button> */}
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
                {collection.map((item, index) => {
                    if (item != undefined) {
                        return (
                            <Product id={item?.id}
                                price={183000}
                                priceOff={183000}
                                slug={item?.slug}
                                title={item?.title}
                                brand={item?.brand}
                                desc={item?.desc}
                                image={item?.image}
                                key={item?.id}
                            />
                        )

                        // return (
                        //     <li key={index}>
                        //         <Image src={`${item?.mianImage}`} alt={item.title} width={50} height={50} />
                        //         <Link onClick={() => handleClick(item?.id)}
                        //             href={`/products/${item?.id}/${item?.slug.replaceAll(" ", "-")}`}
                        //             style={{ backgroundColor: selectedId == item?.id ? "red" : "white" }}
                        //         >{item?.title}</Link>
                        //     </li>
                        // )
                    }
                })}
            </div>
        </div>
    )


}

Products.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}
export default Products;