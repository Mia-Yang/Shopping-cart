import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCart.scss';

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
            <tr className="item">
              <CartItem
                key={product.id}
                name={product.name}
                label={product.label}
                quantity={product.quantity}
                imgUrl={product.imgUrl}
                price={product.price}
              />
            </tr>
          ))}
        </table>

        <a href="##">← Continue Shopping</a>
      </div>
    );
  }
}
export default ShoppingCart;
