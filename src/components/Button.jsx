import { Text } from "./Text";



export function Button({children}){
    return (
        <Text as="button" variant="heading">
            {children}
        </Text>
    )
}