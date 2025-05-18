import { useState, useRef, useEffect } from "react";
import proptype from "prop-types";

PassCodeInput.propTypes = {
    setPassCode: proptype.func,
    mod: proptype.object,
    border: proptype.bool,
};

export default function PassCodeInput({ setPassCode, mod, border = true }) {
    const [inputs, setInputs] = useState([]);
    const inputsRef = useRef([]);

    useEffect(() => {
        setPassCode(inputs.join(""));
    }, [inputs]);

    const handleChange = (e, i) => {
        if (e.target.value.length > 1) return;
        if (e.target.value === "") return;

        const tempArray = [...inputs];
        tempArray[i] = e.target.value;
        setInputs(tempArray);
        if (inputsRef.current[i + 1]) {
            requestAnimationFrame(() => {
                inputsRef.current[i + 1].focus();
            });
        }
    };

    const handleKeyUp = (e, i) => {
        if (e.key === "Backspace") {
            const temp = [...inputs];
            temp[i] = "";
            setInputs(temp);
            inputsRef.current[i - 1].focus();
        }
    };

    return (
        <>
            <div
                className={`flex items-center justify-around border-slate-200 w-full h-[4.5rem] rounded-xl ${
                    border ? "border" : ""
                }`}
            >
                {new Array(6).fill(0).map((_, i) => {
                    return (
                        <input
                            type="password"
                            key={i}
                            id={i}
                            ref={(el) => (inputsRef.current[i] = el)}
                            value={inputs[i]}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyUp(e, i)}
                            className={`h-9 w-9 text-center border-slate-400 rounded-sm md:h-12 md:w-12
                                 focus:outline-2 focus:outline-primaryBlue2 ${
                                     border ? "border" : ""
                                 }`}
                            style={{ backgroundColor: mod }}
                        ></input>
                    );
                })}
            </div>
        </>
    );
}
