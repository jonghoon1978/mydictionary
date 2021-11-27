 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 
const firebaseConfig = {
  apiKey: "AIzaSyBH0_DoRW-Gi1-iXl1ceZk5ymy6NQy6URo",
  authDomain: "sparta-mydictionary.firebaseapp.com",
  projectId: "sparta-mydictionary",
  storageBucket: "sparta-mydictionary.appspot.com",
  messagingSenderId: "828955834724",
  appId: "1:828955834724:web:7be5831a71853d5a33a271",
  measurementId: "G-G9V77KN5RH",
};

initializeApp(firebaseConfig);
//  const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db}
 