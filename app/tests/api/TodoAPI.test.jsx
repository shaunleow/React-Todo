var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text',
        completed: true
      },
      {
        id: 2,
        text: 'no text',
        completed: false
      },
      {
        id: 3,
        text: 'sometimes text',
        completed: true
      }
    ];

    // test if showCompleted is true, show everything
    it('should return all items if showCompleted is true', () => {
      // enter simulated circumstance
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3); // all three showing
    });

    it('should return non completed todos if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1); // only id 2 showing
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2); // should return 2 results with letters some
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
