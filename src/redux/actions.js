export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id,
});

export const increaseQuantity = (id) => ({
  type: 'INCREASE_QUANTITY',
  id,
});
