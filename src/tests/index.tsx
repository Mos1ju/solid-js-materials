import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import { Body, Paragraph, Button } from "solid-js-materials";

const App = (): JSX.Element => {
    return(
    <>
        <Body>
            <div>Testing Body component</div>
        </Body>
        <Paragraph>
            Testing Parargraph  component
        </Paragraph>
        <Button text={"Click me!"}/>
    </>
)}

const appRoot = document.querySelector("#root") as HTMLElement;
console.log(appRoot);
render(() => <App />, appRoot);
