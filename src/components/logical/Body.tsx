import type { JSX } from "solid-js";
import { IProps } from "../IProps";

interface IPropsBody extends IProps {
    children: JSX.Element
}

const Body = (props: IPropsBody): JSX.Element => {
    return (
        <>
            {props.children}
        </>
    )}

export { Body };
