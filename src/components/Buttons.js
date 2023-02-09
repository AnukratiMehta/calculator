import React from "react"

const btnValues = [
    ["AC", "DEL", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
]


export default function Buttons(props) {
    return (
        <div className="buttons">
            {
                btnValues.flat().map((i) => {
                    return (
                        <button
                            key={i}
                            value={i}
                            onClick={(e) =>
                                i === "AC"
                                    ? props.clear(e)
                                    : i === "="
                                        ? props.calculate(e)
                                        : i === "DEL"
                                            ? props.backspace(e)
                                            : props.handleChange(e) || props.errorCatch(e)
                            }
                            className={
                                i === "AC" ? "AC" :
                                    i === "=" ? "equal" :
                                        i === "/" || i === "*" || i === "+" || i === "-" ? "light" :
                                            ""
                            }
                        >{i}</button>
                    )
                })
            }
        </div>
    )
}