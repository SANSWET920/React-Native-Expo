import * as firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBZFJacSg1haBT8vRNQM8H_sFF7uCxN_O8",
  authDomain: "sathyabama-university-a1795.firebaseapp.com",
  databaseURL: "https://sathyabama-university-a1795.firebaseio.com",
  projectId: "sathyabama-university-a1795",
  storageBucket: "sathyabama-university-a1795.appspot.com",
  messagingSenderId: "244210143937",
  appId: "1:244210143937:web:f8895cc3c2727d25d23a40",
  measurementId: "G-QZJ97CFXGT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);






export default firebaseApp;