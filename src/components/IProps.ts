import type { JSX } from "solid-js";

interface IProps {
    name?: string;
    children?: JSX.Element;
    style?: JSX.CSSProperties | string;
}

export { IProps };
