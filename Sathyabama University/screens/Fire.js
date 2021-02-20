import firebase from "firebase";


class Fire {

    constructor() {

         this.init()

         this.checkAuth()

    }

    init = () => {

         if (!firebase.apps.length) {

            firebase.initializeApp({
                apiKey: "AIzaSyBZFJacSg1haBT8vRNQM8H_sFF7uCxN_O8",
                authDomain: "sathyabama-university-a1795.firebaseapp.com",
                databaseURL: "https://sathyabama-university-a1795.firebaseio.com",
                projectId: "sathyabama-university-a1795",
                storageBucket: "sathyabama-university-a1795.appspot.com",
                messagingSenderId: "244210143937",
                appId: "1:244210143937:web:f8895cc3c2727d25d23a40",
                measurementId: "G-QZJ97CFXGT"
                
            });   

         }

    };

    checkAuth = () => {

        firebase.auth().onAuthStateChanged(user => {

           if (!user) {

               firebase.auth().signInAnonymously();

           }

        });
    };

       
    send = messages => {
 
      messages.forEach(item => {

         const message = {

            text: item.text,

            timestamp: firebase.database.ServerValue.TIMESTAMP,

            user: item.user

          };

          this.db.push(message);

       });

    };

    parse = message => {

        const { user, text, timestamp } = message.val();

        const { key: _id} = message;

        const createdAt = new Date(timestamp);


        return {

             _id,

             createdAt,

             text,

             user

        };

    };

     get = callback => {

         this.db.on("child_added", snapshot => callback(this.parse(snapshot)));

     };

     off() {

         this.db.off()

     }

    get db() {

        return firebase.database().ref("messages");

    }

    get uid() {

        return (firebase.auth().currentUser || {}).uid
        
    }

}


export default new Fire();