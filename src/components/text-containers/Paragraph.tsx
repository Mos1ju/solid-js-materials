import { JSX } from "solid-js";
import type { IProps } from "../IProps";

interface IPropsParagraph extends IProps {
    children: JSX.Element | string;
    class?: string; 
}

const Paragraph = (props: IPropsParagraph): JSX.Element => {
    return (
        <p class={props.class}>
            {props.children}
        </p>
)}

export { Paragraph };
