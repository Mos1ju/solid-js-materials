import { JSX } from "solid-js";
import { IProps  } from "../IProps";

interface IPropsButton extends IProps {
    text: string;
}

const style: JSX.CSSProperties = {
    "font-size": "1rem",
    "height": "2rem",
    "width": "8rem",
    "border-width": "0.1rem",
    "border-radius": "7.5%"
}

const Button = (props: IPropsButton) => {
    return(
        <button style={style}>
            {props.text}
        </button>
)}

export { Button };
