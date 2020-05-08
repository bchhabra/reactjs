import React from 'react';
 
const UserInput = (props) => {
return (
    <div>
        <input type="text" onChange={props.firstchange} value={props.firstname}/>
        <input type="text" onChange={props.lastchange} value={props.lastname}/>        
    </div>
)
};
export default UserInput;