var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var actions = require('actions');
// call configure function in configureStore and now you can start firing actions
var store = require('configureStore').configure();

// listen for changes with subscribe. store.getState returns state object
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

// add on to the array of todo items
var initialTodos = TodoAPI.getTodos();
// create new action addTodos to bulk add todos
store.dispatch(actions.addTodos(initialTodos));

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
