import React from 'react';

const values = ['I', 'Would', 'Like', 'To', 'Learn', 'React', 'In', 'Three', 'Months'];

class Banner extends React.Component {

    constructor(props) {
        super(props);
        setInterval(() => {
            let index = this.state.index + 1;
            if(index > 8) {
                index = 0;
            }
            this.setState({index});
        }, 500);
    }

    state = {
        index: 0
    }

    render() {
        return <div className='App' style={{fontSize: 30}}>{values[this.state.index]}</div>;
    }
}

export default Banner;