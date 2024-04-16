import { ReactElement } from "react";

export interface ICircleButton {
    children?: ReactElement;
    hasQuanity?: boolean;
    quanity?: number;
    className?: string;
    containerClass?: string;
    onClick?: void;
}