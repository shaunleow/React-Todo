var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var { text, id, completed, createdAt, completedAt, dispatch } = this.props;
    // set class based on completed status
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
    };

    return (
      // using an anonymous arrow function instead of passing it down from React.createClass
      <div
        className={todoClassName}
        onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed));
        }}
      >
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
