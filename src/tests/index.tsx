import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import { IProps, Body } from "solid-js-materials";

interface IPropsApp extends IProps {
    name: string;
}

const App = (props: IPropsApp): JSX.Element => {
    return(
    <>
        <Body>
            <div>Hello {props.name}</div>
        </Body>
    </>
)}

const appRoot = document.querySelector("#root") as HTMLElement;
console.log(appRoot);
render(() => <App name="Michał" />, appRoot);
