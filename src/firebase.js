import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAdIU1f8hbhErFI55ZJmVgFXOcnoxdkqUs",
    authDomain: "task-mindly.firebaseapp.com",
    projectId: "task-mindly",
    storageBucket: "task-mindly.appspot.com",
    messagingSenderId: "280657690913",
    appId: "1:280657690913:web:1e83f3632b3a9a27c97e60"
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase