import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document';
const Document = () => {
    return (
        <Html lang="fa">
            <Head>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="sugimoto shop" />

            </Head>
            <body dir='rtl'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default Document;