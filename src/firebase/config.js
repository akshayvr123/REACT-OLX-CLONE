import firebase from 'firebase/compat/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi_9OXJ1X05S6sLmGLE27QuJye1XdoViA",
    authDomain: "fir-study-236fc.firebaseapp.com",
    projectId: "fir-study-236fc",
    storageBucket: "fir-study-236fc.appspot.com",
    messagingSenderId: "1008267052707",
    appId: "1:1008267052707:web:1c328cf540f73967152116",
    measurementId: "G-6LKLSS6CK4"
  };

 export default firebase.initializeApp(firebaseConfig)
