import React, { ReactElement } from "react";

export interface ITab {
    children?: string;
    className?: string;
    onClick: React.FC;
    selectedId?: number;
    id: number;
}