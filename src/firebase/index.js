// Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "firebase/app";
// import {
//   getAnalytics
// } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const admin = require('firebase-admin');
const config = require('../config/config');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig)
});

const auth = admin.auth();
// const analytics = getAnalytics(app);

module.exports = {
  admin: admin,
  auth: auth,
}