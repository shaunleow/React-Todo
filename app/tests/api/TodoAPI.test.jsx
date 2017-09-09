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
});
