var React = require('react');
var DeleteTodo = require('DeleteTodo');

var AddTodo = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    // pull the text from the field
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = ''; // clear the value
      this.props.onAddTodo(todoText); // choose to call it onAddTodo
    } else {
      this.refs.todoText.focus(); // if there's no valid data it'll put the cursor back in the field automatically
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="todoText" placeholder="Add a task" />
            <button className="button expanded primary">Add Todo</button>
          </form>
        </div>
        <div>
          <DeleteTodo />
        </div>
      </div>
    );
  },
});

module.exports = AddTodo;
