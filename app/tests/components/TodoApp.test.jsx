var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("should add todo to the todos state on handleAddTodo", () => {
    var todoText = "test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] }); // set it into an empty array
    todoApp.handleAddTodo(todoText); // takes in the todoText as an arg into handleAddTodo

    // grab the text value of the todo that should've been added and verify it matches
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
