import MainContext from "@/providers/main/mainContext";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../app/globals.css";
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<Props> = {
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout<Props> = AppProps & {
    Component: NextPageWithLayout<Props>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout<NextPage>) {
    const getLayout = Component.getLayout ?? (page => page);
    return (<MainContext> <ThemeProvider attribute={"class"}> {getLayout(<Component {...pageProps} />)}</ThemeProvider></MainContext>);
}

