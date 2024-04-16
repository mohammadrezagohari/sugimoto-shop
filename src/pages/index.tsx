import React, { ReactElement } from 'react'
import Image from 'next/image';
import Logo from "@/assets/images/logo.svg";
import MainLayout from '@/layouts/mainLayout';
import Product from '@/components/product/product';
import collection from "@/assets/data/api/products.json";

const Home = () => {
    return (
        <div className='bg-white dark:bg-black p-10'>
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
                    }
                })}
            </div>
        </div>
    )
}
Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}
export default Home; 
