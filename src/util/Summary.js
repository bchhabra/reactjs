import React from 'react'

const Summary = (props) => {
    return(
        <div>
            <label>Total Items {props.totalItem}</label>
            <label>Total Price {props.totalPrice}</label>
        </div>
    )
}
export default Summary