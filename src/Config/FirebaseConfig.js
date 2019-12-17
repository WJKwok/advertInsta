import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA6UoXDoim77rhbhv6JQ9ZymzUbWUzd3PQ",
    authDomain: "reddit-ad.firebaseapp.com",
    databaseURL: "https://reddit-ad.firebaseio.com",
    projectId: "reddit-ad",
    storageBucket: "reddit-ad.appspot.com",
    messagingSenderId: "709236884650",
    appId: "1:709236884650:web:429c07029b53ee6c36bcd3"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
