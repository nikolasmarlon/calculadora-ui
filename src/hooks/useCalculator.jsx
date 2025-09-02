import { CalculatorContext } from "../contexts/CalculatorContext"
import { useContext, useState } from "react";


export function useCalculator(){
    const [operationn , setOperationn ] = useState("")
    const [result , setResult ] = useState("")
    const { updateHistory } = useContext(CalculatorContext)


    function doOperation(input){
        if (input === 'C'){
            setOperationn("")
            setResult("")
            return
        }

        if (input === 'CE'){
            setResult("")
            setOperationn( operationn.slice(0, -1))
            return
        }

        if(input === '='){
            const operationResult = eval(operationn.replace(/,/g, ".")); // eval executa string como se fosse javascript
            const parseResult = operationResult.toString()?.replace(/\./g, ",");
            setResult(parseResult)
            updateHistory(operationn, parseResult)
            return
        }

        if(result){
            setOperationn(isNaN(input) ? `${result}${input}` : input)
            setResult("")
            return
        }

        // para números decimais
        if (input === "," && !operationn.endsWith(",")){
            setOperationn( `${operationn},`)
            return
        }

        setOperationn(`${operationn}${input}`)
    }

    // Boas práticas retornar um objeto com as funções dentro dele.
    return {

        operationn ,
        result,
        doOperation,
    }
}