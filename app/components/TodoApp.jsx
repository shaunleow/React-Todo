var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog",
        },
        {
          id: 2,
          text: "Clean the yard",
        },
        {
          id: 3,
          text: "Destroy the carpet",
        },
        {
          id: 4,
          text: "Bathe the dog",
        },
      ],
    };
  },
  handleAddTodo: function(text) {
    alert("new todo: " + text);
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        {/* pass down the onAddTodo prop we created. call handleAddTodo function! */}
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  },
});

module.exports = TodoApp;
