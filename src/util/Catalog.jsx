import React from 'react';
import productDetails from './products.json';
import Product from './Product';
import Summary from './Summary';

class Catalog extends React.Component{
    constructor(){
        super()
        this.state={
            selectedproducts: []
        }
    }
    render(){
        return(
            <div>
                {this.props.products.map(product => <Product data={product} onSelection={this.addCartHandler} selected={this.isSelected(product)}/>)}
                <Summary totalPrice={this.calculateTotalPrice()} totalItem={this.state.selectedproducts.length}/>
            </div>
        );
    }
    isSelected = (product) => {
        return this.state.selectedproducts.find(prod => prod.id == product.id)
    }
    calculateTotalPrice = () =>{
        let totalPrice = 0
        this.state.selectedproducts.forEach(product => {
            totalPrice+=product.price   
        })
        return totalPrice
    }
    addCartHandler = (product) => {
       const selectedproducts = this.state.selectedproducts;
       selectedproducts.push(product) //.push is simple insert in list or an array.
       console.log(selectedproducts)
       this.setState({selectedproducts:selectedproducts})
    }


}



export default Catalog;

/*
Statement: Catalog sends onselection to Product.
Code: <product onSelection={onSelectionHandler} />

onSelectionHandler = () => {
}


Statment: Product calls onselection
Code: onselection(data);



statement: Product sends onClick to Button.
code: <Button onClick={propagate} />

propagate = () => {
}


Statement: Button calls onClick
code: onClick(event) 
*/