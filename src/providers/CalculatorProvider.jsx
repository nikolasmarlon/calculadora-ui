import { useState } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";


export function CalculatorProvider({children}){

    const [ history, setHistory ] = useState([]);

    function updateHistory(operation, parsedResult){
        setHistory((prev) => [...prev, `${operation}=${parsedResult}`])
    }

    return(
        <CalculatorContext.Provider value={{
            history, updateHistory
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}