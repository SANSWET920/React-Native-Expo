import firebase from "firebase";


class Fire {

    constructor() {

         this.init()

         this.checkAuth()

         

    }

    

    init = () => {

         if (!firebase.apps.length) {

            firebase.initializeApp({
                apiKey: "AIzaSyDdjm5RrguiQobekQCT7B9h0Y8hCEtljgA",
                authDomain: "sanswet-ddc4e.firebaseapp.com",
                databaseURL: "https://sanswet-ddc4e.firebaseio.com",
                projectId: "sanswet-ddc4e",
                storageBucket: "sanswet-ddc4e.appspot.com",
                messagingSenderId: "699168623184",
                appId: "1:699168623184:web:6ba68ba0f2c1a78ff21f55"
                
            });   

         }

    };


    checkAuth = () => {

        firebase.auth().onAuthStateChanged(user => {

           if (!user) {

               

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



export default new Fire;