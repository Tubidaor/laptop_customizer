import React, { Component } from 'react';
import CartChoices from '../Cartchoices/CartChoices';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class CartItems extends Component {
  render() {
    const total = Object.keys(this.props.state.selected).reduce(
      (acc, curr) => acc + this.props.state.selected[curr].cost,
      0
    );
    
    return (
    <>
      <h2>Your cart</h2>
        <CartChoices
          state={this.props.state}
          USCurrencyFormat={USCurrencyFormat}
        />
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </>
    )
  }
}

export default CartItems;