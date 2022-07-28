import { children, JSX } from "solid-js";
import type { IProps } from "../IProps";

interface IPropsArticle extends IProps {
    children: JSX.Element | string;
    style?: JSX.CSSProperties | string;
}

const style: JSX.CSSProperties = {
    "font-size": "2rem"
}

const Article = (props: IPropsArticle): JSX.Element => {
    return (
        <p style={style}>
            {props.children}
        </p>
)}

export { Article };
