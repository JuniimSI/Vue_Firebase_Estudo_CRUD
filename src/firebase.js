import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyD1NRsdlK10pRzANzm7Yd1PHzMi8gplyXI",
    authDomain: "vue-firebase-100fd.firebaseapp.com",
    databaseURL: "https://vue-firebase-100fd.firebaseio.com",
    projectId: "vue-firebase-100fd",
    storageBucket: "vue-firebase-100fd.appspot.com",
    messagingSenderId: "313757781588"
});

export const db = app.database();
export const namesRef = db.ref('names');

