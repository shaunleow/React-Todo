var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var { text, id, completed, createdAt, completedAt } = this.props;
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
        onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  },
});

module.exports = Todo;
