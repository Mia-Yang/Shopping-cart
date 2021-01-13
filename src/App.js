import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import OrderSummary from './component/OrderSummary/OrderSummary';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import './App.scss';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="content">
        <ShoppingCart />
        <OrderSummary />
      </div>
    </Provider>
  );
}

export default App;
