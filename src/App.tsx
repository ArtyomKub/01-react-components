import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/SelfControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className='App'>
            <OnOff/>

            <UnControlledAccordion titleValue={'MENU'}/>

            <UncontrolledRating/>

            <Rating value={3}/>

            <Accordion titleValue={'Menu'} collapsed={false}/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <h1>{props.title}</h1>
// }

export default App;
