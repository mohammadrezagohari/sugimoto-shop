import MainLayout from '@/layouts/mainLayout'
import React, { ReactElement } from 'react'

type Props = {}

function Contact({ }: Props) {
    return (
        <div className="flex flex-wrap justify-center h-[100vh] w-full bg-sky-400">
            <div className="flex flex-wrap justify-center items-center  w-full">
                <h1 className='text-[3em]'>Contact me</h1>
            </div>
            <div className="flex flex-wrap justify-center  w-full">
                <h2 className='text-[4em]'>Mohammadreza Gohari</h2>
            </div>
        </div>
    )
}
Contact.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}

export default Contact
