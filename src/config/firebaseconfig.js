import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqMdV2sNNIIvGz_ZtQ_7qo6vtqJEFAyvs",
    authDomain: "fresh-1e67f.firebaseapp.com",
    projectId: "fresh-1e67f",
    storageBucket: "fresh-1e67f.appspot.com",
    messagingSenderId: "697466897646",
    appId: "1:697466897646:web:505b555a2282335455dfff"
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const database = firebaseApp.firestore();
export default database;