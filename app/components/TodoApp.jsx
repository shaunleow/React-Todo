var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Things To Do</h1>

        <div className="row">
          {/* small-centered = centers our grid on every display size from small up */}
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              {/* we need to pass in the prop we decided to name onSearch  */}
              <TodoSearch />
              <TodoList />
              {/* pass down the onAddTodo prop we created. call handleAddTodo function! */}
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
