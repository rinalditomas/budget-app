import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBw4WpxuPOiaSjQZu42wX3oR4ewfcakchw",
    authDomain: "budget-app-8c54d.firebaseapp.com",
    projectId: "budget-app-8c54d",
    storageBucket: "budget-app-8c54d.appspot.com",
    messagingSenderId: "683980008728",
    appId: "1:683980008728:web:2af00bc23f80b51396426d"
  };

const fire = firebase.initializeApp(firebaseConfig)
const auth = fire.auth()
const db = fire.firestore()


export{auth,db}
