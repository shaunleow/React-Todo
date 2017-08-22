var React = require("react");
var TodoList = require("TodoList");

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
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  },
});

module.exports = TodoApp;
