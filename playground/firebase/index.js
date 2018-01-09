import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDDi0KwoiFgmjnp2TYKanik-pA4Z6luKh8',
  authDomain: 'udemy-todo-app-sleow.firebaseapp.com',
  databaseURL: 'https://udemy-todo-app-sleow.firebaseio.com',
  projectId: 'udemy-todo-app-sleow',
  storageBucket: 'udemy-todo-app-sleow.appspot.com',
  messagingSenderId: '696845226125'
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Shaun',
    age: 32
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', snapshot => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'todo 1'
});

todosRef.push({
  text: 'todo 2'
});
