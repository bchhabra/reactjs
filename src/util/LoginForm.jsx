import React from 'react';
import logindetails from './login.json';

class LoginForm extends React.Component {
    constructor(){
        super()
        this.state={
            username: undefined,
            password: undefined,
            matched: undefined
        }
        
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <label>Username</label><input type="text" onChange={this.usernameChangeHandler} value={this.state.username||''}/><br/>
                <label>Password</label><input type="password" onChange={this.passwordChangeHandler} value={this.state.password||''}/><br/>
                <label style={{display:(this.state.matched==false?'block':'none'), color:'red'}}>invalid credentials</label><br/>
                <button onClick={this.reset}>Reset</button>
                <button disabled={!this.isSignInEnabled()} onClick={this.signIn}>SignIn</button>
            </div>
            );
    }
    isSignInEnabled = () => {
        return (this.state.username && this.state.password)
    }
    reset = () => {
        this.setState({username:undefined, password:undefined, matched:undefined})
    }
    signIn = () => {
        const match = (this.state.username===logindetails.username && this.state.password===logindetails.password)
        this.setState({matched:match})
        if(match){
            alert("login Successful")
        }
    }
    usernameChangeHandler = (event) => {
        this.setState({username:event.target.value})
    }
    passwordChangeHandler = (event) => {
        this.setState({password:event.target.value})
    }
    

}
export default LoginForm;