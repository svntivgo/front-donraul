// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUXMTui2wM_1LKertZMSshGGa0oPTvm8",
  authDomain: "don-raul.firebaseapp.com",
  projectId: "don-raul",
  storageBucket: "don-raul.appspot.com",
  messagingSenderId: "140131976956",
  appId: "1:140131976956:web:6c4f8bc2f61a842bf53979"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
