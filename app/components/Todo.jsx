var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var { text, id, completed, createdAt, completedAt } = this.props;
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
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  },
});

module.exports = Todo;
