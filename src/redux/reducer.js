// const initialState = [
//   {
//     id: 1,
//     name: 'Fifa',
//     label: 'ps4',
//     price: 44,
//     quantity: 99,
//     imgUrl:
//       'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
//   },
//   {
//     id: 2,
//     name: 'Glacier White 500GB',
//     label: 'ps4',
//     price: 249.99,
//     quantity: 1,
//     imgUrl:
//       'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
//   },
//   {
//     id: 3,
//     name: 'Platinum Headset',
//     label: 'ps4',
//     price: 119.99,
//     quantity: 1,
//     imgUrl:
//       'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
//   },
// ];

export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      const newState = state;
      return newState.concat(action.items);

    case 'REMOVE_ITEM':
      return state.filter((product) => product.id !== action.id);

    case 'INCREASE_QUANTITY':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: (product.quantity += 1) }
          : product
      );

    case 'DECREASE_QUANTITY':
      let decreaseIndex = state.findIndex(
        (product) => product.id === action.id
      );
      if (state[decreaseIndex].quantity === 1) {
        return state.filter((product) => product.id !== action.id);
      }
      state[decreaseIndex].quantity -= 1;
      return [...state];

    default:
      return state;
  }
};
