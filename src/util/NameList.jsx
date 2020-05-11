import React from 'react';
import SearchName from "./SearchName";
import Names from './Names';

class NameList extends React.Component{

    constructor(){
        super();
        this.state = {
            searchedText : ""
        }
        this.onSearchHandler=this.onSearchHandler.bind(this);
    }

    

    render (){
        return(
            <div>
                <SearchName onSearch={this.onSearchHandler} searchedText={this.state.searchedText}></SearchName>
                <Names values={this.props.names.filter(name => name.toLowerCase().includes(this.state.searchedText.toLowerCase()))}></Names>
            </div>

        );

    }



    onSearchHandler(event){
        console.log("Typing......."+event.target.value)
        this.setState({searchedText:event.target.value})
    }
}
export default NameList;