import React from "react";

export interface IContextReturnType {
    user: any;
}

export interface IMainContextProps {
    children: React.ReactNode;
}

export interface IMainContextState {
    user: any | undefined;
}

export interface IProductContextState {
    isLike: boolean;
    setIsLike: any;
    isNotification: boolean;
    setIsNotification: any;
    selectSize: string;
    setSelectSize: any;
    addToCart: any
}