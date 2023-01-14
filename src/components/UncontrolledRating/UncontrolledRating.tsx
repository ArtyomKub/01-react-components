import React, {useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating() {



    return (
        <div>
            <Star selected={value > 0}/><button>1</button>
            <Star selected={value > 1}/><button>1</button>
            <Star selected={value > 2}/><button>1</button>
            <Star selected={value > 3}/><button>1</button>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return (
            <span><b>Star </b></span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }
}
