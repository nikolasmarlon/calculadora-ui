import { useCalculator } from "../hooks/useCalculator";
import { Button } from "./Button";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Card } from "./Card";



export function Calculator(){
    
    const {operationn, result, doOperation } = useCalculator()

    const buttons = [
        [
            {input: 'CE'},
            {input: "C", className: "flex-1 h-16"},
            {input: "/", variant: "primary"},
        ],
        [
            {input: "7"},
            {input: "8"},
            {input: "9"},
            {input: "*", variant: "primary"},
        ],
        [
            {input: "4"},
            {input: "5"},
            {input: "6"},
            {input: "-", variant: "primary"},
        ],
        [
            {input: "1"},
            {input: "2"},
            {input: "3"},
            {input: "+", variant: "primary"},
        ],
        [
            {input: "0", className: "flex-1 h-16"},
            {input: ","},
            {input: "=" , className: "w-16 h-16 bg-[#7f45e2]"},
        ]
    ]


    function handleButtonClick(input){
        doOperation(input)  // vem do hook customizado para fazer as operações      
    }


    return(
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
            <CalculatorDisplay operation={operationn} result={result} />      

            <div className="flex flex-col gap-3">
                     {
                        buttons.map((row, index) => (
                            <div key={`row-${index}`} className="flex gap-3">
                                 {
                                    row.map((button) => (
                                        <Button key={button.input} className={button.className || 'w-16 h-16'} variant={button.variant} 
                                            onClick={() => handleButtonClick(button.input)}>
                                                {button.input}
                                        </Button>
                                    ))
                                 }
                            </div>
                        ))
                     }                  
            </div>  

        </Card>
    )
}