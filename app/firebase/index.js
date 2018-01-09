import firebase from 'firebase';

try {
  var config = {
    apiKey: 'AIzaSyDDi0KwoiFgmjnp2TYKanik-pA4Z6luKh8',
    authDomain: 'udemy-todo-app-sleow.firebaseapp.com',
    databaseURL: 'https://udemy-todo-app-sleow.firebaseio.com',
    projectId: 'udemy-todo-app-sleow',
    storageBucket: 'udemy-todo-app-sleow.appspot.com',
    messagingSenderId: '696845226125'
  };
  firebase.initializeApp(config);
} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;
