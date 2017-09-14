var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    // mocha method. beforeEach gets called before every test. afterEach gets called after
    beforeEach(() => {
      // clean out localStorage
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      var todos = [
        {
          id: 23,
          text: 'test all files',
          completed: false,
        },
      ];
      TodoAPI.setTodos(todos); // stringified

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
      // working with objects/arrays use toEqual
      // toBe = same exact object or array in memory
      // toEqual = compares values on them
    });

    it('should not set invalid todos array', () => {
      var badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);

      // this test fails cause bot of our tests are using the same localStorage
      // when you call TodoAPI.setTodos with a valid array above, the value still exists
      // use beforeEach: a lifecycle method
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    // test if no data stored. invalid data. expect empty array to come back.
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [
        {
          id: 23,
          text: 'test all files',
          completed: false,
        },
      ];
      // calling it explicitly to localStorage instead of setTodos cause its cleaner.
      // would have to test setTodos as well
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text',
        completed: true,
      },
      {
        id: 2,
        text: 'no text',
        completed: false,
      },
      {
        id: 3,
        text: 'sometimes text',
        completed: true,
      },
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
