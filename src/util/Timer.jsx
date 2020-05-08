import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        setInterval(() => {
            let minute = this.state.minute;
            let second = this.state.second + 1;
            if(second > 60) {
                minute += 1;
                second = 0;
            }
            this.setState({minute, second});
        }, 1000);
    }

    state = {
        minute: 0,
        second: 0
    }

    render() {
        return(
        <div className='App'  style={{fontSize: 30}}>
            {this.pad(this.state.minute)}:{this.pad(this.state.second)}
        </div>);
    }

    pad(value) {
        if(value >= 10) {
            return value;
        }
        return '0'.concat(value)
    }
}

export default Timer;