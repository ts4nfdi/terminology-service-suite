import { default as React, ReactElement } from '../../../../../node_modules/react';
import { ColorObj, CssClassNameObj } from '../../app';
export default function Badge({ children, onClick, className, color, }: CssClassNameObj & ColorObj & {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode;
}): ReactElement;
