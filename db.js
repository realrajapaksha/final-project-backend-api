const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const config = require('./config')

initializeApp({
    credential: cert(config.firebaseConfig)
});

const firestore = getFirestore();

module.exports = firestore;