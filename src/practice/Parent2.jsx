import React from 'react'
import Child2 from './Child2'
import Child3 from './Chlid3'

class Parent2 extends React.Component{
    constructor(){
        super()
        this.state = {
            selected : ""
        }
        this.Handler=this.Handler.bind(this)

    }

    Handler = (event) => {
        console.log("radio button selected")
        this.setState({selected:event.target.value})

    }

    render(){
        return(
            <div>
                <Child2 selected={this.state.selected}></Child2>
                <Child3 onClick={this.Handler}></Child3>
            </div>
        )

    }
}

export default Parent2