import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtNIVpNeYv5XMbeYZ79cjW9raxIrxIn4Q",
  authDomain: "urbancompanyclone.firebaseapp.com",
  projectId: "urbancompanyclone",
  storageBucket: "urbancompanyclone.appspot.com",
  messagingSenderId: "267510241895",
  appId: "1:267510241895:web:bb51698e0a0d63082812c2",
  measurementId: "G-5ZMZ7QPG5S",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
