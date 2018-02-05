var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var actions = require('actions');
// call configure function in configureStore and now you can start firing actions
var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // set an attribute of store
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
