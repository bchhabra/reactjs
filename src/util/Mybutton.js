import React from 'react'

const Mybutton = (props) => {
    console.log(props)
    const myincrease = () =>{
        props.onClick()
    }
    return(
        <div>
            <button onClick={myincrease}>{props.children[0]}</button>
        </div>
    )
}
export default Mybutton