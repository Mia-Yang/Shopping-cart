// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Import your own reducer
import { reducer } from './redux/reducer';

export default (ui, initState) => {
  const store = createStore(reducer, initState);

  return rtlRender(ui, {
    wrapper: ({ children }) => {
      return (
        <Provider store={store}>
          <div className="content">{children}</div>
        </Provider>
      );
    },
  });
};
