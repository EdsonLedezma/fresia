// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEFvQrRFxiYpYdrUINdPZ3KLeXfTopSVo",
  authDomain: "fres-ia.firebaseapp.com",
  databaseURL: "https://fres-ia-default-rtdb.firebaseio.com",
  projectId: "fres-ia",
  storageBucket: "fres-ia.appspot.com",
  messagingSenderId: "804369813454",
  appId: "1:804369813454:web:f0aedf60e7a29d5a82259f",
  measurementId: "G-1V2R2LEBXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const apiKey = "AIzaSyDtvSKbMz8IiNiu6rMN5wBX0xk_RRfn4C8";