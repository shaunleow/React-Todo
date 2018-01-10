import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123',
        text: 'Anything',
        completed: false,
        completedAt: 0
      }
    };
    var response = actions.addToDo(action.todo);

    expect(response).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', done => {
    const store = createMockStore({});
    const todoText = 'This is just a random line';

    store
      .dispatch(actions.startAddTodo(todoText))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toInclude({ type: 'ADD_TODO' });
        expect(actions[0].todo).toInclude({ text: todoText });
        done();
      })
      .catch(done);
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
