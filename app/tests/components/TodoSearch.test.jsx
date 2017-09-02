var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should call onSearch with entered input text", () => {
    var searchText = "dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <TodoSearch onSearch={spy} />,
    );

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    // spy should have two arguments because of this.props.onSearch(showCompleted, searchText)
    // showCompleted never got updated so false
    expect(spy).toHaveBeenCalledWith(false, "dog");
  });

  it("should call onSearch with proper checked value", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <TodoSearch onSearch={spy} />,
    );

    // checked value
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, "");
  });
});
