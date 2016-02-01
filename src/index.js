'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Book from './components/Book';
import Bookshelf from './components/Bookshelf';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>BOOK Search!</h1>
        <Bookshelf />
      </div>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path='book/:permalink' component={Book} />
    <Route path='/' component={App} />
  </Router>
), document.body);
