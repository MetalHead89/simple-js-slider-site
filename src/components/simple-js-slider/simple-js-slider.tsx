import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../ts/store/store';
import PageContainer from '../page/page-container';

const body = document.querySelector('body');

if (body !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <PageContainer />
    </Provider>,
    body
  );
}
