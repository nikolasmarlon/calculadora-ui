import { Text } from "./Text";

export function CalculatorDisplay ({ operation, result }){
    return(
        <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
            <Text as="div" variant="muted" className="flex items-center justify-end h-7">{result && operation}</Text>
            <div className="flex items-center justify-between h-9">
                <Text variant="muted" as="div">=</Text>
                <Text variant="blast" as="div">{result || operation}</Text>            
            </div>
        </div>
    )
}