// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD-9ZucNpnOUb7j9WoD9IMg7YF4IFjGdO0",
    authDomain: "alurageek-6f52c.firebaseapp.com",
    databaseURL: "https://alurageek-6f52c-default-rtdb.firebaseio.com",
    projectId: "alurageek-6f52c",
    storageBucket: "alurageek-6f52c.appspot.com",
    messagingSenderId: "877409177597",
    appId: "1:877409177597:web:3c016693ab1657a0df9394",
    measurementId: "G-G7PQ4Z2EE5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const dbRef = ref(getDatabase(app));

const getDbProductos =
    get(child(dbRef, `producto`)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }}).catch((error) => {
    console.error(error);
    });

const getDbUsuarios = 
    get(child(dbRef, `usuario`)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }}).catch((error) => {
    console.error(error);
    });

export const firebaseService = {
    getDbProductos,
    getDbUsuarios,
};