import React, { Component } from 'react';
import CartItems from '../CartItems/CartItems'

class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <CartItems state={this.props.state}/>
      </section>
    )
  }
}

export default Cart;