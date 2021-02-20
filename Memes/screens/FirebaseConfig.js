import * as firebase from "firebase"



const firebaseConfig = {
  apiKey: "AIzaSyDdjm5RrguiQobekQCT7B9h0Y8hCEtljgA",
  authDomain: "sanswet-ddc4e.firebaseapp.com",
  databaseURL: "https://sanswet-ddc4e.firebaseio.com",
  projectId: "sanswet-ddc4e",
  storageBucket: "sanswet-ddc4e.appspot.com",
  messagingSenderId: "699168623184",
  appId: "1:699168623184:web:5b38bccb0c34384af21f55"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);






export default firebaseapp;