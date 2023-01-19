import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/SelfControlledAccordion/UnControlledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div className='App'>
            <OnOff/>
            <UnControlledAccordion titleValue={'MENU'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={'Menu'} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} collapsed={accordionCollapsed}/>
        </div>
    );
}


export default App;
