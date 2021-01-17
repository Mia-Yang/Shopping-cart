import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchItems,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/actions';

class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { productList } = this.props;
    console.log(productList, '-----------props');
    return (
      <div className="shoppingCart">
        <div className="title">
          <span>Shopping Cart</span>
          <span>{productList.length} Items</span>
        </div>

        <div className="split"></div>
        <table>
          <thead>
            <tr>
              <th>product details</th>
              <th> </th>
              <th>quantity</th>
              <th>price</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr className="item" key={product.id}>
                <CartItem
                  name={product.name}
                  label={product.label}
                  quantity={product.quantity}
                  imgUrl={product.imgUrl}
                  price={product.price}
                  onRemove={() => this.props.removeItem(product.id)}
                  onIncrease={() => this.props.increaseQuantity(product.id)}
                  onDecrease={() => this.props.decreaseQuantity(product.id)}
                />
              </tr>
            ))}
          </tbody>
        </table>

        <a href="##" className="continue">
          ← Continue Shopping
        </a>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productList: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchItems, removeItem, increaseQuantity, decreaseQuantity },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
