import './CartItem.scss';
function CartItem(props) {
  const { name, label, quantity, imgUrl, price } = props;
  return (
    <>
      <td>
        <img src={imgUrl} alt="product img" className="productImg" />
      </td>
      <td>
        <span className="name">{name}</span>
        <span className="label">{label}</span>
        <button>Remove</button>
      </td>
      <td>
        <div className="counter">
          <button className="changeUnit">➖</button>
          <span className="quantity">{quantity}</span>
          <button className="changeUnit">➕</button>
        </div>
      </td>
      <td>{price}</td>
      <td>total</td>
    </>
  );
}

export default CartItem;
