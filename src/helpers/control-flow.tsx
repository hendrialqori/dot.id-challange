import React from "react";

type Props = { children: React.ReactNode }
type Params = { condition: boolean }

function Flow({ children }: Props) {
    let show: React.ReactNode;
    let otherwise: React.ReactNode;

    React.Children.map(children, (child) => {

        if (React.isValidElement(child)) {
            if (Flow.If == child.type && (child.props as Params).condition) {
                show = child

            } else if (Flow.ElseIf == child.type && (child.props as Params).condition) {
                show = child

            } else if (Flow.Else == child.type) {
                otherwise = child
            }
        }
    })

    return show ?? otherwise
}

Flow.If = (props: Props & Params) => props.children
Flow.ElseIf = (props: Props & Params) => props.children
Flow.Else = (props: Props) => props.children

export default Flow