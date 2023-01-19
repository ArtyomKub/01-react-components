import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/SelfControlledAccordion/UnControlledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className='App'>
            <UnControlledAccordion titleValue={'MENU'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                       collapsed={accordionCollapsed}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}


export default App;
