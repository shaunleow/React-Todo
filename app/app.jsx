var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

// grab actions
var actions = require('actions');
// call configure function in configureStore and now you can start firing actions
var store = require('configureStore').configure();

// listen for changes with subscribe. store.getState returns state object
store.subscribe(() => {
  console.log('New state', store.getState());
});

// try some actions
store.dispatch(actions.addToDo('Clean your face'));
store.dispatch(actions.setSearchText('face'));
store.dispatch(actions.toggleShowCompleted());

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
