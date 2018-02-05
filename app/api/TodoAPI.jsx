var $ = require('jquery');

module.exports = {
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
