var React = require("react");

var Todo = React.createClass({
  render: function() {
    var { text, id, completed } = this.props;

    return (
      // using an anonymous arrow function instead of passing it down from React.createClass
      <div
        onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  },
});

module.exports = Todo;
