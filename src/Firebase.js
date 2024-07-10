// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPVkgzrSDgz0x5Kp9u3F_1tnMy5f80Gxo',
  authDomain: 'hotsix-blog-5f9b1.firebaseapp.com',
  projectId: 'hotsix-blog-5f9b1',
  storageBucket: 'hotsix-blog-5f9b1.appspot.com',
  messagingSenderId: '626143740589',
  appId: '1:626143740589:web:7ae3a47537750974563c24',
  measurementId: 'G-HBVFK071KV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
const analytics = getAnalytics(app);
