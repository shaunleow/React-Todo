var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false, // when start application, only show unfinished todos
      searchText: "", // we want to return all todo items no matter what the text is
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
  // pass in the two values thats going to come from TodoSearch component
  // this component maintains the state. the rest is presentational and responds to user interaction
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(), // upper or lowercase wont affect search
    });
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        {/* we need to pass in the prop we decided to name onSearch  */}
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        {/* pass down the onAddTodo prop we created. call handleAddTodo function! */}
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  },
});

module.exports = TodoApp;
