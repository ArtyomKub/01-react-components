import React from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";




export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
};

const callback = action('UncontrolledAccordion mode change event fired');

export const MenuCollapsedMode = () => <UnControlledAccordion titleValue={'Menu'}/>
