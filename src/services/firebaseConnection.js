import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA9momNkZ6CD1DfUAne2rxqIjkMj-NZh2k",
    authDomain: "tickets-2de6c.firebaseapp.com",
    projectId: "tickets-2de6c",
    storageBucket: "tickets-2de6c.appspot.com",
    messagingSenderId: "843680932685",
    appId: "1:843680932685:web:af6a57538d05ef53400d04",
    measurementId: "G-TNHYD7DLH2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};