var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false, // when start application, only show unfinished todos
      searchText: '', // we want to return all todo items no matter what the text is
      todos: TodoAPI.getTodos(), // start with local storage
    };
  },
  // this gets fired after either the props or state for the component changes
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos); // any changes to the state will set todos
  },
  // we would like this to update the todos array which is a state property
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
        },
      ],
    });
  },
  handleToggle: function(id) {
    // map let's us iterate over all our todos via the callback function and make changes to each
    var updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
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
        <TodoList todos={todos} onToggle={this.handleToggle} />
        {/* pass down the onAddTodo prop we created. call handleAddTodo function! */}
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  },
});

module.exports = TodoApp;
