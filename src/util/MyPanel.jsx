import React from 'react';
import SizeSelector from './SizeSelector';


class MyPanel extends React.Component {

    constructor() {
        super();
        this.state = {okCount: 0, cancelCount: 0, data: {}}
        this.clickedHandler = this.clickedHandler.bind(this);
    }

    render() {
        return (
        <div>
            <button id='btn-ok' onClick={this.clickedHandler}>Ok</button>
            <button id='btn-cancel' onClick={this.clickedHandler}>Cancel</button>


            <button id='btn-service' onClick={this.handleServiceCall.bind(this)}>Call service</button>
            Ok clicked: <label>{this.state.okCount}</label>
            Cancel clicked: <label>{this.state.cancelCount}</label>
            The data from the service is :
            <pre>
                {JSON.stringify(this.state.data)}
            </pre>   


            <SizeSelector sizes = {['S', 'M', 'L', 'XL', 'XXL']} onSelect={this.handleSelection}/>
        </div>);
    }

    handleSelection = (value) => {
        console.log("Something selected :: " + value);
    }


    clickedHandler(event) {
        if(event.target.id == 'btn-ok') {
            this.setState({okCount: this.state.okCount + 1});
        } else {
            this.setState({cancelCount: this.state.cancelCount + 1});
        }
    }

    handleServiceCall() {
        fetch('http://api.github.com/')

        .then(response => response.json())
        .then(data => this.setState({data}));
    }
}

export default MyPanel;