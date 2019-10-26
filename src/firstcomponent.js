import React from "react";

function FirstComponent(props){
    console.log('****this is first Props****', props.items);
    return (
        <div>
        <h1>this is Our listing components</h1>
        <ul>
            {props.items.map((items, index)=>{
             return <li key={index}>{props.items[index]}
             </li>
            })}

        </ul>
        </div>
    )

}

export default FirstComponent;