import React from 'react'

const Question = (props) => {
    return(
        <div>
                <label>{props.data.text}</label>
                {props.data.options.map(op => <input type="radio" value={op.text} name={props.data.id}/>)}
                    
        </div>
    )
}
export default Question