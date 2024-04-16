import React, { createContext, useContext } from 'react';
import {
    IContextReturnType,
    IMainContextProps,
    IMainContextState,
    IProductContextState
} from "@/providers/main/type"
export const Context = createContext<IContextReturnType>({} as IContextReturnType);


const MainContext = (props: any) => {
    const { children } = props;
    const [state] = React.useState<IMainContextState>({
        user: { name: "Mohamamdreza Gohari", id: 1, email: "eng.mr.gohari@gmail.com" },
    });
    const [productDetail] = React.useState<IProductContextState>({
        isLike: true,
        setIsLike: null,
        isNotification: true,
        setIsNotification: null,
        selectSize: "",
        setSelectSize: null,
        addToCart: null,
    });
    const isLoggedIn = (): boolean => {
        return !!state.user;
    }

    return (
        <Context.Provider
            value={{
                ...state,
                ...productDetail
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default MainContext;
