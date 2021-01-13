import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem } from '../../redux/actions';

class ShoppingCart extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="shoppingCart">
        <h1 className="cartTitle">
          <span>Shopping Cart</span>
          <span>{productList.length} Items</span>
        </h1>

        <hr />
        <table>
          <tr>
            <th>product details</th>
            <th> </th>
            <th>quantity</th>
            <th>price</th>
            <th>total</th>
          </tr>
          {productList.map((product) => (
            <tr className="item" key={product.id}>
              <CartItem
                name={product.name}
                label={product.label}
                quantity={product.quantity}
                imgUrl={product.imgUrl}
                price={product.price}
                onRemove={() => this.props.removeItem(product.id)}
              />
            </tr>
          ))}
        </table>

        <a href="##">← Continue Shopping</a>
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
    {
      removeItem,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
