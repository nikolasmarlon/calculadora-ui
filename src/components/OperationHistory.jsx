import { useContext } from "react";
import { Card } from "./Card";
import { Text } from "./Text";
import { CalculatorContext } from "../contexts/CalculatorContext";



export function OperationHistory(){
    const { history } = useContext(CalculatorContext)
    return(
        <Card className='py-10 px-8 w-[22.25rem]'>
            <Text as="h1" variant="heading" className='mb-4'>Histórico de operações</Text>

            {
                history.length > 0 ? (
                    <ul className="flex flex-col gap-3">
                        {
                            history.map((value, index)=> (
                                <Text key={index} as="li">{value}</Text>
                            ))
                        }
                    </ul>
                ) : (
                    <Text as="p" variant="muted">Nenhuma operação realizada ainda</Text>
                )
            }

        </Card>
    )
}