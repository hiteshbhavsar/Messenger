import firebase from "firebase";

var firebaseConfig = {
  // your firebase config
    apiKey: "AIzaSyCgbaZhRIjh0qLw8iimLPX9nh5_Pwotpqk",
    authDomain: "messenger-e30b2.firebaseapp.com",
    projectId: "messenger-e30b2",
    storageBucket: "messenger-e30b2.appspot.com",
    messagingSenderId: "1072884050295",
    appId: "1:1072884050295:web:1a390163c994148e441972",
    measurementId: "G-W0TZJGDNV1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
