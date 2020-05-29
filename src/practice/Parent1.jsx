import React from 'react'

class Parent1 extends React.Component{

    constructor(){
        super()
        this.state = {
            selected : ""
        }
        this.myHandler=this.myHandler.bind(this)
    }
    myHandler = (event) => {
        event.preventDefault();
        console.log("inside handler")
        this.setState({selected:event.target.value})
    }
    
    render(){
        return(
            <form>
                <div>
                    <label>You have clicked {this.state.selected}</label><br/>
                    <input type="submit" value="Yes" onClick={this.myHandler}></input> &nbsp; 
                    <input type="submit" value="No" onClick={this.myHandler}></input> &nbsp; 
                    <input type="submit" value="Cancel" onClick={this.myHandler}></input> &nbsp; 
                </div>
            </form>
        )
    }
}
export default Parent1

