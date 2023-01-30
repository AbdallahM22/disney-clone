import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA6rMHCFBgySm9MkvZnKaZgWolt2tVcF1g",
  authDomain: "dizney-6ed6f.firebaseapp.com",
  projectId: "dizney-6ed6f",
  storageBucket: "dizney-6ed6f.appspot.com",
  messagingSenderId: "1024403183085",
  appId: "1:1024403183085:web:1407b0677f062a352f43e4",
  measurementId: "G-3Z0FGDH8TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default db;
