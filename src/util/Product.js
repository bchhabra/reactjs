import React from 'react';

const Product = (props) => {
    const propagateSelection = () => {
        props.onSelection(props.data)
    }
    
    return(
        <div>
            <label>{props.data.title}</label><br/>
            <label>{props.data.desc}</label><br/>
            <label>{props.data.price}</label><br/>
            <img src = {props.data.imagepath}/><br/>
            <button onClick={propagateSelection}>Add to cart</button><br/>
            <br/>
        </div>
    );
}

export default Product;