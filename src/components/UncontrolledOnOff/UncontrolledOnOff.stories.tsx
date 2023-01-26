import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {OnOff} from "../OnOff/OnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('UncontrolledOnOff mode change event fired');

export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>

export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>

export const DefaultInputValue = () => <input defaultValue={'yo'}/>

