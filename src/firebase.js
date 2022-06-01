// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURFv1V3YS_kqSKlX9X_KinVmt0cpWyYs",
  authDomain: "getama-industry.firebaseapp.com",
  projectId: "getama-industry",
  storageBucket: "getama-industry.appspot.com",
  messagingSenderId: "874634832596",
  appId: "1:874634832596:web:cd71b86a72ff711a92e941",
  measurementId: "G-FJXYY3ES69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
