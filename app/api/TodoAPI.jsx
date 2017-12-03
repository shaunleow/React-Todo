var $ = require('jquery');

module.exports = {
  // set todos that takes in array of todos you'd like to save
  // gets called when we add a new todo or toggle a todo
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      // if invalid data, undefined will get returned
      // calls localStorage method and JSON turns array into strings
      // localStorage can't store objects or arrays
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  // gets called when we first start up the app
  // fetch items of local storage. make sure it's an array. if yes, return
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = []; // if no valid data return empty array. catch is empty so...

    // if converting strings to an array fails, catch the error and do nothing. var todos is an empty array.
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {}

    // check if what was stored in the string of todos is actually an array
    // could be an object or if it's maliciously entered data
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    searchText = searchText.toLowerCase();
    return (
      todos
        // filter by showCompleted aka show everything. we name the arg todo.
        .filter(todo => !todo.completed || showCompleted)
        // filter by searchText
        .filter(
          todo =>
            !searchText || todo.text.toLowerCase().indexOf(searchText) != -1
        )
        // sort todos by non-completed first
        .sort((a, b) => {
          if (!a.completed && b.completed) {
            return -1;
          } else if (a.completed && !b.completed) {
            return 1;
          } else {
            return 0;
          }
        })
    );
  }
};
