
import * as firebase from 'firebase';

import '@firebase/auth';
import '@firebase/firestore';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyC941fXOazJIjUN-C0JI8dCgH6NJiBZh0U",
    authDomain: "teste-c60d5.firebaseapp.com",
    databaseURL: "https://teste-c60d5.firebaseio.com",
    projectId: "teste-c60d5",
    storageBucket: "teste-c60d5.appspot.com",
    messagingSenderId: "779193560788",
    appId: "1:779193560788:web:fefd606fd04b39c4de9541",
    measurementId: "G-BK7GPZRHXD"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };