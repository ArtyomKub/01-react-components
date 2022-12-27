import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is APP component
            <Rating/>
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


export default App;
