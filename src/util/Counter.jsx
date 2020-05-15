import React from 'react'

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
                <button onClick={this.increase}>+</button> 
                <input type="number" onChange={this.initialise} value={this.state.currentValue}/>
                <button onClick={this.decrease}>-</button> 
            </div>
        )
        
    }
    initialise = (event) => {
        this.setState({currentValue:parseInt(event.target.value)})
        console.log("initialise value "+event.target.value)
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