var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'shaun'
      };
      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add a new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something something',
          completed: false,
          completedAt: 456332
        }
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [
        {
          id: '123',
          text: 'Blabla',
          completed: true,
          createdAt: 150,
          completedAt: 160
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var response = reducers.todosReducer(df(todos), df(action));

      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [
        {
          id: '111',
          text: 'blablabla',
          completed: false,
          completedAt: undefined,
          createdAt: 33000
        }
      ];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      // make sure it's the same
      expect(response[0]).toEqual(todos[0]);
    });
  });
});
