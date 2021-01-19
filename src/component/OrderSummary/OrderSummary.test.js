import { fireEvent, render } from '@testing-library/react';
import OrderSummary from './OrderSummary';
import App from '../../App';

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

let orderSummary;

describe('render orderSummary', () => {
  beforeEach(() => {
    orderSummary = render(
      <App>
        <OrderSummary props={productList} />
      </App>
    );
  });
  it('should calculate total price without express fee', () => {
    const totalCost = orderSummary.getByTestId('total-price');
    expect(totalCost).toEqual(132);
  });
});
