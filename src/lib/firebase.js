import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCJmzCf8QrD2r23Rq53cm9VRVLLV5lAiw",
    authDomain: "smartframe-d1eda.firebaseapp.com",
    databaseURL: "https://smartframe-d1eda.firebaseio.com",
    projectId: "smartframe-d1eda",
    storageBucket: "smartframe-d1eda.appspot.com",
    messagingSenderId: "901120582608",
    appId: "1:901120582608:web:107c4c47e42c76f3c00fd5",
    measurementId: "G-83H9E0Y4LB"
};

firebase.initializeApp(firebaseConfig)

export default firebase
