import React from 'react';

const Product = (props) => {
    const propagateSelection = () => {
        props.onSelection(props.data) //This is only needed when you want to pass data back to your parent for some calculation or anything.
    }
    
    return(
        <div>
            <label>{props.data.title}</label><br/>
            <label>{props.data.desc}</label><br/>
            <label>{props.data.price}</label><br/>
            <img src = {props.data.imagepath}/><br/>
            <button onClick={propagateSelection} disabled={props.selected}>Add to cart</button><br/>
            <br/>
        </div>
    );
}

export default Product;

/*
In dumb all information should be passed from parent component, why ? Because they do not maintain any state information. for example in this 
case also whether a button should be enabled or disable after adding to the card should be decided by parent.
Dumb component cannot decide by themself.

**/