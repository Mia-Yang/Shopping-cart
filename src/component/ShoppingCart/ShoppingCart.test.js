import {
  fireEvent,
  getAllByRole,
  getByRole,
  render,
  screen,
} from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import CartItem from '../CartItem/CartItem';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const productList = [
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
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
  {
    id: 3,
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
];

const onRemove = jest.fn();
const onIncrease = jest.fn();
const onDecrease = jest.fn();

let shoppingCart;

describe('render shopping cart', () => {
  beforeEach(() => {
    shoppingCart = render(
      <ShoppingCart
        props={productList}
        onRemove={onRemove}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    );
  });
  it('should show 3 items', () => {
    expect(shoppingCart.find(CartItem).length).toEqual(3);
  });
});
