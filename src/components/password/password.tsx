import React, { ReactElement } from "react";
import IPassword from "./type";
const Password = (props: IPassword): ReactElement => {
  const { isShowText } = props;
  const value = isShowText ? "mohammad" : "ali";

  return <input type="password" value={value} />;
};

export default Password;
