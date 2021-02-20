import firebase from "firebase"


class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                    apiKey: "AIzaSyDrx9hE7o0DXpsEAOPobk2Yrbqvo5k7ymA",
                    authDomain: "pt1-project.firebaseapp.com",
                    databaseURL: "https://pt1-project.firebaseio.com",
                    projectId: "pt1-project",
                    storageBucket: "pt1-project.appspot.com",
                    messagingSenderId: "865108626247",
                    appId: "1:865108626247:web:2ee32ca3661afbc0cdda62",
                    measurementId: "G-0XM474LY19"
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
        const { Key: _id } = message;
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
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();