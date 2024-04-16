import React, { ReactElement, useContext } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/mainLayout';
import { Context } from '@/providers/main/mainContext';
const DetailsHasTitle = () => {
    const { user } = useContext(Context);

    const router = useRouter();
    const { id, slug } = router.query;
    return (<div>Details Has Title : {id} - {slug} <br /> <h2>and your user is : {user?.name} and id {user?.id}</h2></div>)
}
DetailsHasTitle.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}
export default DetailsHasTitle;