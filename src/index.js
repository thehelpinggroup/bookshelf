'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link } from 'react-router'
// import Book from './components/Book';
//
// const mountNode = document.getElementById('root');
//
// ReactDOM.render(
//   <Book permalink="jack-kerouac-on-the-road" />,
//   mountNode
// );
//
// const App = React.createClass({#<{(|...|)}>#})
//
// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//         <Route path="/book/:permalink" component={Book}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>
// ), document.body)



import React from 'react';
import ReactDOM from 'react-dom';
import Book from './components/Book';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <Book permalink="jack-kerouac-on-the-road" />,
  mountNode
);
