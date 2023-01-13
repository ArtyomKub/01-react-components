import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/SelfControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className='App'>
            <OnOff/>
            <UnControlledAccordion titleValue={'MENU'}/>
            <UncontrolledRating/>
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
