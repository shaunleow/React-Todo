import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');

import firebase, { firebaseRef } from 'app/firebase/';
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
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false
      }
    };
    var response = actions.updateTodo(action.id, action.updates);

    expect(response).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach(done => {
      var todosRef = firebaseRef.child('todos');

      // wipe all the items so tests start with a clean slate
      todosRef
        .remove()
        .then(() => {
          testTodoRef = firebaseRef.child('todos').push();

          testTodoRef.set({
            text: 'Something to do',
            completed: false,
            createdAt: 433222
          });
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      testTodoRef.remove().then(() => {
        done();
      });
    });

    it('should toggle todo and dispatch UPDATE_TODO action', done => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should populate todos and dispatch ADD_TODOS', done => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');

        done();
      }, done);
    });
  });
});
