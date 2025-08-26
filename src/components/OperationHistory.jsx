import { Card } from "./Card";
import { Text } from "./Text";


export function OperationHistory(){
    return(
        <Card className='py-10 px-8 w-full'>
            <Text as="h1" variant="heading" className='mb-4'>Histórico de operações</Text>

            <ul className="flex flex-col gap-3">
                <Text as="li">1 + 1 = 2</Text>
                <Text as="li">1 + 1 + 4 = 6</Text>
                <Text as="li">1 + 1 = 2</Text>
            </ul>

        </Card>
    )
}