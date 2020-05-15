import React from 'react'
import Mybutton from './Mybutton'
import MyInput from './MyInput'

class Counter extends React.Component {

    constructor(){
        super()
        this.state={
            currentValue:0
        }

    }
    render(){
        return(
            <div>
                <Mybutton onClick={this.increase}>+</Mybutton> 
                <MyInput type="number" onChange={this.initialise} value={this.state.currentValue}/>
                <Mybutton onClick={this.decrease}>-</Mybutton> 
            </div>
        )
        
    }
    initialise = (value) => {
        this.setState({currentValue:parseInt(value)})
        console.log("initialise value "+value)
    }
    increase = () => {
        const increasedValue=this.state.currentValue+1
        this.setState({currentValue:increasedValue})
        console.log("increased value "+increasedValue)
    }
    decrease = () => {
        const decreasedValue=this.state.currentValue-1
        this.setState({currentValue:decreasedValue})
        console.log("decreased value "+decreasedValue)
    }

}
export default Counter