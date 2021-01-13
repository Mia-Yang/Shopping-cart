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
        <button onClick={props.onRemove}>Remove</button>
      </td>
      <td>
        <div className="counter">
          <button className="changeUnit" onClick={props.onDecrease}>
            ➖
          </button>
          <span className="quantity">{quantity}</span>
          <button className="changeUnit" onClick={props.onIncrease}>
            ➕
          </button>
        </div>
      </td>
      <td>{price}</td>
      <td>{(quantity * price).toFixed(2)}</td>
    </>
  );
}

export default CartItem;
