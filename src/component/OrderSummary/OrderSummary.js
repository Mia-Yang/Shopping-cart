import React from 'react';
import './OrderSummary.scss';
import { connect } from 'react-redux';

class OrderSummary extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="summary">
        <h1>Order Summary</h1>
        <hr />
        <div>
          <span>ITEMS {productList.length}</span>
          <span>$</span>
        </div>
        <h3>SHIPPING</h3>
        <select name="shipping" id="shipping">
          <option value="standard">standard shipping</option>
          <option value="express">express shipping</option>
        </select>
        <h3>PROMO CODE</h3>
        <input type="text" placeholder="Enter Your Code" /> <br />
        <button className="apply">APPLY</button>
        <hr />
        <div>
          <span>TOTAL COST</span>
          <span>$</span>
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
