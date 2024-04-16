import React, { ReactElement, useContext } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/mainLayout';
import { Context } from '@/providers/main/mainContext';
import ProductDetails from '@/components/product/details';
import products from "@/assets/data/api/products.json";

const DetailsHasTitle = () => {
    const { user } = useContext(Context);

    const router = useRouter();
    const { id, slug } = router.query;
    const pId = Number(id);
    const product = products.find(p => p.id === pId);
    return <ProductDetails product={product} />
}
DetailsHasTitle.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}
export default DetailsHasTitle;