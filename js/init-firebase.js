var firebaseConfig = {
    apiKey: "AIzaSyB8WhTJmefW1Bh41QswkKv9DuO-iXEZRj8",
    // authDomain: "project-id.firebaseapp.com",
    // databaseURL: "https://project-id.firebaseio.com",
    projectId: "portfolio-manager-32ae7",
    // storageBucket: "project-id.appspot.com",
    // messagingSenderId: "sender-id",
    // appID: "app-id",
};

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);