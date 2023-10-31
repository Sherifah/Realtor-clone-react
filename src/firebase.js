// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASRfupXiJZYYQIzpxUpHMv7cBiA0exJNA",
  authDomain: "realtor-clone-react-a4298.firebaseapp.com",
  projectId: "realtor-clone-react-a4298",
  storageBucket: "realtor-clone-react-a4298.appspot.com",
  messagingSenderId: "1064418344587",
  appId: "1:1064418344587:web:0dbb54440ddf0b7920de8e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
