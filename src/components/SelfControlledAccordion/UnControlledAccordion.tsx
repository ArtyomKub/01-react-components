import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


// export function Accordion2(props: AccordionPropsType) {
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.onClick()}}>--- {props.title} ---</h3>
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