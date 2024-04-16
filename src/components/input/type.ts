import React from "react";

export interface IInput {
    value?: string,
    name: string,
    placeholder?: string,
    type?: "string",
    onChange?: React.FC;
    className: string;
}