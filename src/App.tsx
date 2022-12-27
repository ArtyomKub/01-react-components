import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>Stars</div>
            <div>Stars</div>
            <div>Stars</div>
            <div>Stars</div>
            <div>Stars</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>MENU</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default App;
