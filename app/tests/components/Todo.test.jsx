var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// load it raw
var { Todo } = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(
      <Todo {...todoData} dispatch={spy} />
    );
    // load in jQuery
    var $el = $(ReactDOM.findDOMNode(todo));

    // simulate a click event. pass in the DOM element we'd like to simulate on
    // in this case, it's the div, which is our root
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});

// <Todo {...todo}/> is the same with <Todo id={todo.id} text={todo.text} completed={todo.completed}/>
