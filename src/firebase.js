
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBg6QTTB97qVquRiygIwP_3pA-gza4YQlk",
  authDomain: "tasty-recipes-fdadc.firebaseapp.com",
  projectId: "tasty-recipes-fdadc",
  storageBucket: "tasty-recipes-fdadc.appspot.com",
  messagingSenderId: "1032533529162",
  appId: "1:1032533529162:web:3a3ad1cefeae03d5db4cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);