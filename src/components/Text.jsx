import React from "react"


const TextVariants = {
    dafault: 'text-xl',
    muted: 'text-xl text-(--text-secondary)',
    heading: 'text-2xl',
    blast: 'text-3xl'
}


export function Text ({ as = 'span', variant = 'default', className, children, ...props}) {
    return React.createElement(
        as,
        {
            className: `${TextVariants[variant]} ${className ? className : ''}`,
            ...props,
        },
        children,
    )
}