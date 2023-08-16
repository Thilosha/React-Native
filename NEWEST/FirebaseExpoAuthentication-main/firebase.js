// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-qH_y1WSI57CxAGL9CQAkBsMvQ2pRJ4k",
  authDomain: "thriftzy-f3a3c.firebaseapp.com",
  projectId: "thriftzy-f3a3c",
  storageBucket: "thriftzy-f3a3c.appspot.com",
  messagingSenderId: "1089295906201",
  appId: "1:1089295906201:web:c59961461f4b92faea8f08",
  measurementId: "G-YHS91336M5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };