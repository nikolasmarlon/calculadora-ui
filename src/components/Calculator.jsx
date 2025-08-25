import { CalculatorDisplay } from "./CalculatorDisplay";
import { Card } from "./Card";



export function Calculator(){
    return(
        <Card className="flex flex-col gap-[1.625rem] w=[22.25rem] pt-14 px-8 pb-8">
            <CalculatorDisplay operation={"1+1"} result={"2"} />        

        </Card>
    )
}