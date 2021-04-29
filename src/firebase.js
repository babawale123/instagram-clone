// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDftT451SpLu98cciSj6AH3QZw5kGawic8",
    authDomain: "instagram-clone-react-2f2bd.firebaseapp.com",
    projectId: "instagram-clone-react-2f2bd",
    storageBucket: "instagram-clone-react-2f2bd.appspot.com",
    messagingSenderId: "352114588616",
    appId: "1:352114588616:web:b82d4f53384349e4f71efd",
    measurementId: "G-TSHSRRHSZR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };