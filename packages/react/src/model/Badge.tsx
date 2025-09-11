import React, {ReactElement} from "react";
import {ColorObj, CssClassNameObj} from "../app";
import {EuiBadge} from "@elastic/eui";
import "../style/ts4nfdiStyles/ts4nfdiBadgeStyle.css";

export default function Badge({
    children,
    onClick,
    className,
    color
}: CssClassNameObj & ColorObj & {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: React.ReactNode
}) : ReactElement {
    return (
        <span className={className || "ts4nfdi-badge-style"}>
            <span
                role={onClick ? "button" : undefined}
                onClick={onClick}
                onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.click();
                }}
            >
                <EuiBadge
                    className={onClick ? "badge clickable-badge" : "badge"}
                    color={color || "#6dccb1"}
                >
                    {children || "No text available"}
                </EuiBadge>
            </span>
        </span>
    );
}