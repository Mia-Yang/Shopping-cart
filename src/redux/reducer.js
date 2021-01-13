const initialState = [
  {
    id: 1,
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
  {
    id: 2,
    name: 'Glacier White 500GB',
    label: 'ps4',
    price: 249.99,
    quantity: 1,
    imgUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
  },
  {
    id: 3,
    name: 'Platinum Headset',
    label: 'ps4',
    price: 119.99,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fegypt.souq.com%2Feg-en%2Fsony-playstation-4-slim-500-gb-1-controller-glacier-white-22260289%2Fi%2F&psig=AOvVaw2VU-vyzH-_XYPoKfPMi9yT&ust=1610531813920000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi8nteQlu4CFQAAAAAdAAAAABAD',
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state.filter((product) => product.id !== action.id);

    case 'INCREASE_QUANTITY':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: (product.quantity += 1) }
          : product
      );

    default:
      return state;
  }
};
