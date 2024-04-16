import React, { ReactElement } from "react";

export interface IInputHasIcon {
    value?: string,
    name: string,
    placeholder?: string,
    type?: string,
    onChange?: React.FC;
    className?: string;
    icon?: string;
    children?: ReactElement
}