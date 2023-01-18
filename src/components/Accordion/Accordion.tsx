import React from "react";

export type AccordionValueType = true | false

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    value: AccordionValueType
    onClick: (value: AccordionValueType) => void
}


export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.value}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


export function Accordion2(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} value={true}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} value={true}/>
                <AccordionBody/>
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: AccordionValueType) => void
    value: AccordionValueType
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick(props.value)}}>--- {props.title} ---</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}