var React = require('react');

var DeleteTodo = React.createClass({
  clearTodos: function(todos) {
    localStorage.removeItem('todos');
    return todos;
  },
  render: function() {
    return (
      <div>
        <button className="button expanded alert" onClick={this.clearTodos}>
          Clear Todos
        </button>
      </div>
    );
  },
});

module.exports = DeleteTodo;
