import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";



export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callback = action('UncontrolledRating mode change event fired')

export const RatingChanging = () => <UncontrolledRating />