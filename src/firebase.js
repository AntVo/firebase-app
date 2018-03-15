import * as firebase from 'firebase'
require("firebase/firestore");


const config = {
	  apiKey: "AIzaSyCgJ7BzBB7VopfwwMg6xQpxzpv9H5F18ks",
    authDomain: "fir-app-96f05.firebaseapp.com",
    databaseURL: "https://fir-app-96f05.firebaseio.com",
    projectId: "fir-app-96f05",
    storageBucket: "fir-app-96f05.appspot.com",
    messagingSenderId: "658859930117"
}
export const firebaseApp = firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();


// ADD to DATABASE
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
