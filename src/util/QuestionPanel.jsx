import React from 'react'
import Question from './Question'

class QuestionPanel extends React.Component{
    constructor(){
        super()

    }
    resetHandler = () => {

    }

    submittHandler = () => {

    }
   
    render(){
        return(
            <div>
               {this.props.data.map(ques =><Question data={ques}/>)}
                <button onClick={this.resetHandler}> Reset</button>
                <button onClick={this.submitHandler}> Submit</button>

            </div>
        )
    }


}
export default QuestionPanel