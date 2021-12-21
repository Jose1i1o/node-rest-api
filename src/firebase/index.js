// Import the functions you need from the SDKs you need
// import {
//   initializeApp
// } from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";

const admin = require('firebase-admin');

const {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID,
} = process.env;

// App´s firebase configuration
const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
} = process.env;

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});

const analytics = getAnalytics({
  credential: admin.credential.cert(app)
});

const auth = admin.auth();

module.exports = {
  admin: admin,
  analytics: analytics,
  auth: auth
}