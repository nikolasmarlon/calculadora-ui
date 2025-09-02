import { useEffect, useState } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";


export function CalculatorProvider({children}){

    const [ history, setHistory ] = useState([]);
    const historyStoragekey = 'history'


    useEffect(()=>{
        const historyFromStorage = localStorage.getItem(historyStoragekey)
        setHistory(JSON.parse(historyFromStorage || '[]'))
    }, [])

    function updateHistory(operation, parsedResult){
        setHistory((prev) => {
            const updatedHistory = [...prev, `${operation}=${parsedResult}`]
            localStorage.setItem(historyStoragekey, JSON.stringify(updatedHistory))
            return updatedHistory
        })
    }

    return(
        <CalculatorContext.Provider value={{
            history, updateHistory
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}