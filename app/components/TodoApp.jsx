var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false, // when start application, only show unfinished todos
      searchText: "", // we want to return all todo items no matter what the text is
      todos: [
        {
          id: uuid(),
          text: "Walk the dog",
        },
        {
          id: uuid(),
          text: "Clean the yard",
        },
        {
          id: uuid(),
          text: "Destroy the carpet",
        },
        {
          id: uuid(),
          text: "Bathe the dog",
        },
      ],
    };
  },
  // we would like this to update the todos array which is a state property
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
        },
      ],
    });
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
