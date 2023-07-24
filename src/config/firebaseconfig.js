import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAqMdV2sNNIIvGz_ZtQ_7qo6vtqJEFAyvs",
    authDomain: "fresh-1e67f.firebaseapp.com",
    projectId: "fresh-1e67f",
    storageBucket: "fresh-1e67f.appspot.com",
    messagingSenderId: "697466897646",
    appId: "1:697466897646:web:505b555a2282335455dfff"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;