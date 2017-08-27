var React = require("react");

var TodoSearch = React.createClass({
  handleSearch: function() {
    // grab the checked value
    var showCompleted = this.refs.showCompleted.checked;
    // grab text value
    var searchText = this.refs.searchText.value;
    // we want to let the TodoApp to know it needs to update the todos that are getting shown
    // call a prop method that's going to get passed down
    // call onSearch property that will get passed down from TodoApp
    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              onChange={this.handleSearch}
            />
            Show completed todos
          </label>
        </div>
      </div>
    );
  },
});

module.exports = TodoSearch;
