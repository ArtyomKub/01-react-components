import React, {useState} from "react";

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(4);

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        <span>
            {props.selected ? <b>star </b> : 'star'}
        </span>
    )
}
