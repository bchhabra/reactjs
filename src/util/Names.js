import React from 'react';

const Names = (props) => {

    return(
        <div>
            <ul>
                {props.values.map(value => <li>{value}</li>)}
            </ul>
        </div>
    );
}
export default Names;