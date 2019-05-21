import React, { Component } from 'react';
import {productConsumer, ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Product extends Component {
  render(props) {
    
    return (
      <ProductConsumer>
        {(val) => {
          return console.log(val)
        }}
      </ProductConsumer>
    )
  }
}
