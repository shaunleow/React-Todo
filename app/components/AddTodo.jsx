var React = require('react');
var DeleteTodo = require('DeleteTodo');
var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    // pull the text from the field
    var todoText = this.refs.todoText.value;
    var { dispatch } = this.props;

    if (todoText.length > 0) {
      this.refs.todoText.value = ''; // clear the value
      dispatch(actions.startAddTodo(todoText)); // dispatch action
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
  }
});

export default connect()(AddTodo);
