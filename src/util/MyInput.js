import React from 'react'

const MyInput = (props) => {

    return(
        <div>
            <input type={props.type} onChange={props.onChange} value={props.value}/> 
        </div>
    )
}
export default MyInput