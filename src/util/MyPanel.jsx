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
            <button id='btn-cancel' onClick={this.clickedHandler}>Cancel</button><br />

            Ok clicked: <label>{this.state.okCount}</label><br />
            Cancel clicked: <label>{this.state.cancelCount}</label><br />
            
            <button id='btn-service' 
                onClick={this.handleServiceCall.bind(this)}>Call service</button><br />
            
            The data from the service is :
            <pre>
                {JSON.stringify(this.state.data, null, 2)}
            </pre>   

            <SizeSelector 
                sizes = {['S', 'M', 'L', 'XL', 'XXL']} 
                onSelect={this.handleSizeSelection}
                selected={this.state.selectedSize} />
        </div>);
    }

    handleSizeSelection = (value) => {
        console.log("Size selected :: " + value);
        this.setState({selectedSize: value});
    }


    clickedHandler(event) {
        if(event.target.id == 'btn-ok') {
            this.setState({okCount: this.state.okCount + 1});
        } else if(event.target.id == 'btn-cancel') {
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