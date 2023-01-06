import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

function App(props: any) {
    return (
        <div>
            {/*<PageTitle title={'THIS IS APP COMPONENT'}/>*/}
            {/*<PageTitle title={'MY FRIENDS'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <Accordion titleValue={'MENU'} collapsed={true}/>
            <Accordion titleValue={'USERS'} collapsed={false}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
