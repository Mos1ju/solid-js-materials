import type { JSX } from "solid-js";
import { IProps } from "../IProps";

interface IPropsBody extends IProps {
    children: JSX.Element;
    class?: string;
}

const Body = (props: IPropsBody): JSX.Element => {
    return (
        <div class={props.class}>
            {props.children}
        </div>
)}

export { Body };
