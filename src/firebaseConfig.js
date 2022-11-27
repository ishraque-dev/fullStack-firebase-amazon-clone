// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDagU2WJ085Ei-QjLE1paDE7LLCXzJ2IPU',
  authDomain: 'clone-v1-71e03.firebaseapp.com',
  projectId: 'clone-v1-71e03',
  storageBucket: 'clone-v1-71e03.appspot.com',
  messagingSenderId: '1021941464127',
  appId: '1:1021941464127:web:20399901c87848b5f1cc8a',
  measurementId: 'G-W2RJ8BWT04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
