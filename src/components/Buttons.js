import React from "react"

export default function Buttons(props) {

    
    return (
        <div className="buttons">
            <button className="AC" onClick={props.clear} value={"AC"}>AC</button>
            <button onClick={props.backspace} value={"DEL"}>DEL</button>
            <button className="light" onClick={props.handleChange} value={"/"}>/</button>

            <button onClick={props.handleChange} value={7}>7</button>
            <button onClick={props.handleChange} value={8}>8</button>
            <button onClick={props.handleChange} value={9}>9</button>

            <button className="light" onClick={props.handleChange} value={"*"}>X</button>

            <button onClick={props.handleChange} value={4}>4</button>
            <button onClick={props.handleChange} value={5}>5</button>
            <button onClick={props.handleChange} value={6}>6</button>

            <button className="light"onClick={props.handleChange} value={"-"}>-</button>

            <button onClick={props.handleChange} value={1}>1</button>
            <button onClick={props.handleChange} value={2}>2</button>
            <button onClick={props.handleChange} value={3}>3</button>

            <button className="light"onClick={props.handleChange} value={"+"}>+</button>

            <button onClick={props.backspace} value={0}>0</button>


            <button onClick={props.handleChange} value={"."}>.</button>

            <button className="equal" onClick={props.calculate} value={"="}>=</button>
        </div>
    )
}