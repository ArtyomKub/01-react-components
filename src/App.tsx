import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <> THIS IS COMPONENT</>
}

export default App;
