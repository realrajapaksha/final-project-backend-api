const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const config = require('./config')
const servicefile = require('./service-account-file.json')

initializeApp({
    credential: cert(servicefile)
});

const firestore = getFirestore();

module.exports = firestore;