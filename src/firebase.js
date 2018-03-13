import * as firebase from 'firebase'

const config = {
	  apiKey: "AIzaSyCgJ7BzBB7VopfwwMg6xQpxzpv9H5F18ks",
    authDomain: "fir-app-96f05.firebaseapp.com",
    databaseURL: "https://fir-app-96f05.firebaseio.com",
    projectId: "fir-app-96f05",
    storageBucket: "fir-app-96f05.appspot.com",
    messagingSenderId: "658859930117"
}
export const firebaseApp = firebase.initializeApp(config);

