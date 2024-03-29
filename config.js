'use strict';

const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
    PORT,
    TYPE,
    PROJECT_ID,
    PRIVATE_KEY_ID,
    CLIENT_EMAIL,
    CLIENT_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_X509_CERT_URL
} = process.env

const { privateKey } = JSON.parse(process.env.PRIVATE_KEY || '{ privateKey: null }')
const fireVercal = process.env.FIREBASE_CONFIG;
assert(PORT, 'PORT is required')

//PRIVATE_KEY.replace(/\\n/g, '\n')

module.exports = {
    port: PORT,
    FfirebaseOnVercal: fireVercal,
    firebaseConfig: {
        "type": TYPE,
        "project_id": PROJECT_ID,
        "private_key_id": PRIVATE_KEY_ID,
        "private_key": privateKey,
        "client_email": CLIENT_EMAIL,
        "client_id": CLIENT_ID,
        "auth_uri": AUTH_URI,
        "token_uri": TOKEN_URI,
        "auth_provider_x509_cert_url": AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": CLIENT_X509_CERT_URL
    }
}