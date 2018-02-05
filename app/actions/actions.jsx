import moment from 'moment';
import firebase, { firebaseRef } from 'app/firebase/';

export var setSearchText = searchText => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addToDo = todo => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = text => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(
        addToDo({
          ...todo,
          id: todoRef.key
        })
      );
    });
  };
};

export var addTodos = todos => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var startAddTodos = () => {
  // return thunk function which will get called by redux
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos');

    // get the value from firebase
    return todosRef.once('value').then(snapshot => {
      // this var is for data that came back from firebase
      var todos = snapshot.val() || {};
      // pass an array to redux
      var parsedTodos = [];

      // name it todoId cause we're identifying them by id (.key)
      Object.keys(todos).forEach(todoId => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      // addTodos takes our array which we have stored in parsedTodos and it'll update our redux store
      dispatch(addTodos(parsedTodos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};
