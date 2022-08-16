import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBcUEU87UrHAF_7KIOfNOMmU5Qi3tiw54",
  authDomain: "brunoprofilepage.firebaseapp.com",
  projectId: "brunoprofilepage",
  storageBucket: "brunoprofilepage.appspot.com",
  messagingSenderId: "991761924358",
  appId: "1:991761924358:web:50222a6a75bc7d04a05e87",
  measurementId: "G-6X0F6QVQME"
};

firebase.initializeApp(firebaseConfig);
  
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firebaseConfig, firestore, storage };