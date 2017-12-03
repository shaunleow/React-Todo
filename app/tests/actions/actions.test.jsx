var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some random text'
    };
    var response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var response = actions.addToDo(action.text);

    expect(response).toEqual(action);
  });

  it('should generate add todos action object', () => {
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

    var response = actions.addTodos(todos);

    expect(response).toEqual(action);
  });

  it('should toggle showCompleted', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var response = actions.toggleShowCompleted(action.type);

    expect(response).toEqual(action);
  });

  it('should toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    var response = actions.toggleToDo(action.id);

    expect(response).toEqual(action);
  });
});
