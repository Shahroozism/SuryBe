import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAswGwggtyyY2XF6U8NRbc_VclnqPOSos4",
    authDomain: "sury-events.firebaseapp.com",
    databaseURL: "https://sury-events.firebaseio.com",
    projectId: "sury-events",
    storageBucket: "sury-events.appspot.com",
    messagingSenderId: "633647170089",
    appId: "1:633647170089:web:0b96b654dfcfd7fbc5d238",
    measurementId: "G-DGD3G7P6S5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;