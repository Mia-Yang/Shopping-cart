const url = 'http://localhost:3001/shoppingCart';

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id,
});

export const increaseQuantity = (id) => ({
  type: 'INCREASE_QUANTITY',
  id,
});

export const decreaseQuantity = (id) => ({
  type: 'DECREASE_QUANTITY',
  id,
});

export const receiveItems = (items) => ({
  type: 'RECEIVE_ITEMS',
  items,
});

export const fetchItems = () => {
  return (dispatch) => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => dispatch(receiveItems(data)));
  };
};
