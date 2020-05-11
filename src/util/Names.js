import React from 'react';

const Names = ({values=[]}) => {

    return(
        <div>
            <ul>
                {values.map(value => <li>{value}</li>)}
            </ul>
        </div>
    );
}
export default Names;