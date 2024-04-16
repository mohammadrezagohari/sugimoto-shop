import React from "react";

export interface IInputHasLable {
    value?: string,
    label: string,
    name: string,
    placeholder?: string,
    type?: "string",
    onChange?: React.FC;
}