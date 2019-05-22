import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext()
// provider
// consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct:detailProduct
  }
  handleDetail = () => {
    console.log("Hello from Detail");
  } 
  addToCart = () => {
    console.log("Hello from add To Cart");
  } 
  render() {
    //console.log(this.state.products)
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart}}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}