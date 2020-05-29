import React from 'react'

const Child3 = (props) => {
const myChildHandler = (event) =>{
    props.onClick(event)
}

    return(
        <div>
            <input type="radio" name="g1" value = "Yes" onClick={myChildHandler} /> Yes
            <input type="radio" name="g1" value = "No" onClick={props.onClick} /> No
            <input type="radio" name="g1" value = "Maybe" onClick={props.onClick} /> Maybe
        </div>
    )


}
export default Child3