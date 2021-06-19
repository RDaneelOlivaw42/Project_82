import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDMermwhp_bg9gEM2Knd_HffFGvEuS2tRw",
    authDomain: "project-77-fb998.firebaseapp.com",
    projectId: "project-77-fb998",
    storageBucket: "project-77-fb998.appspot.com",
    messagingSenderId: "100380798584",
    appId: "1:100380798584:web:019f745d779cde3a32478d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();