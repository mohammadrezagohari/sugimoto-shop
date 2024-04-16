import React, { ReactElement } from "react";
import IPassword from "./type";
const Password = (props: IPassword): ReactElement => {
    const { value } = props;
    return <input type="password" value={value} />;
};

export default Password;
