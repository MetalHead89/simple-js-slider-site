import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../page/page';

const body = document.querySelector('body');

if (body !== null) {
  ReactDOM.render(<Page />, body);
}
