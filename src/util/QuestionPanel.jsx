import React from 'react'
import Question from './Question'

class QuestionPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {answers:props.answers}
    }
    resetHandler = () => {

    }

    submittHandler = () => {

    }
   
    render(){
        return(
            <div>
               {this.props.qdata.map(ques =><Question data={ques} selected={this.getSelectedAnswerId(ques.id)} onAnswer={this.answerSelectionHandler}/>)}
                <button onClick={this.resetHandler}> Reset</button>
                <button onClick={this.submitHandler}> Submit</button>
            </div>
        )
    }

    getSelectedAnswerId = (qid) => {
       console.log("searching for qid "+qid)
       const option =  this.state.answers.find(f=>f.question_id==qid)
       console.log(option)
       return option && option.option_id 
    }

    answerSelectionHandler = (qid,oid) => {
        const option = this.state.answers.find(f=>f.question_id==qid)
        option.option_id=oid
        this.setState(this.state)
    }

}
export default QuestionPanel