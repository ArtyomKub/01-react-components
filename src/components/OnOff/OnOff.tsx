import React from 'react';

type PropsType = {
    on: boolean
}

export const OnOff = () => {

    const on = false

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: on ? 'green' : 'white'
    };

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '10px',
        backgroundColor: on ? 'white' : 'red'

    };

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
