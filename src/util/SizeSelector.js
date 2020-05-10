import React from 'react';

const SizeSelector = ({sizes = [], onSelect}) => {


    const propagate = (event) => {
        console.log("Size selected");
        onSelect(sizes[event.target.id]);  //Calling point
    }


    return (<div>
            <button id='0' onClick={propagate}>{sizes[0]}</button>
            <button id='1' onClick={propagate}>{sizes[1]}</button>
            <button id='2' onClick={propagate}>{sizes[2]}</button>
            <button id='3' onClick={propagate}>{sizes[3]}</button>
            <button id='4' onClick={propagate}>{sizes[4]}</button>
        </div>
    );

   

}

export default SizeSelector;