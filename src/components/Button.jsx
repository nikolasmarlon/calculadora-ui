import { Text } from "./Text";


const buttonVariants = {
    default: 'bg-(--background)',
    primary: 'bg-(--primary)',
}

export function Button({variant = 'default', children, className, ...props}){
    return (
        <Text as="button" variant="heading" className={`
            flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-linear-(--gradient)
            hover:bg-linear-(--gradient-hover)
            shadow-(--shadow)

            ${buttonVariants[variant]}

            ${className ? className : ''}
        `} {...props}>
            {children}
        </Text>
    )
}