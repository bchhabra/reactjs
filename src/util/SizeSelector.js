import React from 'react';

const SizeSelector = ({sizes = [], onSelect, selected}) => {

    const propagate = (event) => {
        onSelect(sizes[event.target.id]);  //Calling the actual handler
    }

    return (
        <div>
            {
                sizes.map((size, index) => 
                    <button 
                        id={index}
                        key={index} 
                        style={{marginRight: '5px', borderColor: (selected == sizes[index] ? 'blue' : null)}} 
                        onClick={propagate}>{size}</button>
                )
            }
            
            {/**
            <button id='0' onClick={propagate}>{sizes[0]}</button>
            <button id='1' onClick={propagate}>{sizes[1]}</button>
            <button id='2' onClick={propagate}>{sizes[2]}</button>
            <button id='3' onClick={propagate}>{sizes[3]}</button>
            <button id='4' onClick={propagate}>{sizes[4]}</button>
            */}
        </div>
    );
}

export default SizeSelector;