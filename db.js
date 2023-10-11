const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
// const config = require('./config')
const servicefile = require('./admin-sdk.json')
// const firebase = require('firebase');

// const firebaseConfig = {
//     apiKey: "AIzaSyBO2KvFh3RVkNLDDv7W2dHyxKo6A5Q9cT0",
//     authDomain: "nanotek-esoft.firebaseapp.com",
//     projectId: "nanotek-esoft",
//     storageBucket: "nanotek-esoft.appspot.com",
//     messagingSenderId: "505172388074",
//     appId: "1:505172388074:web:08157b853ba64607ee8f93",
//     measurementId: "G-3V5H0CJ3N9"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// module.exports = db;

initializeApp({
    credential: cert(servicefile)
});

const firestore = getFirestore();

module.exports = firestore;