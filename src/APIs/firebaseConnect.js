import firebase from 'firebase/app'
require('firebase/auth');
require('firebase/database');
var firebaseConfig = {
    apiKey: "AIzaSyBkTkYLYXiBo3lIsdLs3_F9Hqhtvh68I2M",
    authDomain: "tiki-84a90.firebaseapp.com",
    databaseURL: "https://tiki-84a90-default-rtdb.firebaseio.com",
    projectId: "tiki-84a90",
    storageBucket: "tiki-84a90.appspot.com",
    messagingSenderId: "647141855348",
    appId: "1:647141855348:web:236cdd19d8fdda3763c121",
    measurementId: "G-JVR8B9GWFG"
};

export const tikiData = firebase.initializeApp(firebaseConfig);