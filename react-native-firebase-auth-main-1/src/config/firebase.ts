// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/auth';
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-qH_y1WSI57CxAGL9CQAkBsMvQ2pRJ4k",
  authDomain: "thriftzy-f3a3c.firebaseapp.com",
  projectId: "thriftzy-f3a3c",
  storageBucket: "thriftzy-f3a3c.appspot.com",
  messagingSenderId: "1089295906201",
  appId: "1:1089295906201:web:c59961461f4b92faea8f08",
  measurementId: "G-YHS91336M5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

export default app;

