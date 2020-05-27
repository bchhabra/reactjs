import React from 'react'

const Question = (props) => {
    const radioHandler = (event) =>{
        props.onAnswer(props.data.id, event.target.value)
    }
    return(
        <div>
                <label>{props.data.text}</label>
                {props.data.options.map(op => <input type="radio" value={op.id} name={props.data.id} checked={op.id==props.selected} onChange={radioHandler}/>)}
               
        </div>
    )
}
export default Question