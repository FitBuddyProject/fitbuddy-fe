import React from "react"

export const MyButton = (props: {
    children: React.ReactNode,
    color?: string
    backgroundColor?: string
}) => {
    return (<button style={{ color: props.color, backgroundColor: props.backgroundColor}}>{props.children} </button>)
}