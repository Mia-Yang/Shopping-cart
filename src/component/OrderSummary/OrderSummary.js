import React from 'react';
import './OrderSummary.scss';
import { connect } from 'react-redux';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingFee: 5,
    };
  }

  getTotalCost = (productList) => {
    let totalCost = 0;
    for (const product of productList) {
      let { price, quantity } = product;
      let productTotal = price * quantity;
      totalCost += productTotal;
    }
    return totalCost;
  };

  handleChangeShipping = (e) => {
    this.setState({
      shippingFee: parseInt(e.target.value),
    });
  };

  render() {
    const { productList } = this.props;
    let totalCost = this.getTotalCost(productList);
    return (
      <div className="summary">
        <h1>Order Summary</h1>
        <hr />
        <div>
          <span>ITEMS {productList.length}</span>
          <span>$ {totalCost.toFixed(2)}</span>
        </div>
        <h3>SHIPPING</h3>
        <select
          name="shipping"
          id="shipping"
          onChange={this.handleChangeShipping}
          value={this.state.value}
        >
          <option value="5" selected>
            standard shipping -$5
          </option>
          <option value="10">express shipping -$10</option>
        </select>
        <h3>PROMO CODE</h3>
        <input type="text" placeholder="Enter Your Code" /> <br />
        <button className="apply">APPLY</button>
        <hr />
        <div>
          <span>TOTAL COST</span>
          <span>$ {(totalCost + this.state.shippingFee).toFixed(2)}</span>
        </div>
        <button className="checkout">CHECK OUT</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state,
  };
}

export default connect(mapStateToProps)(OrderSummary);
