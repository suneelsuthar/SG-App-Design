import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhA0ppNUU0agCzXYn1z_stPyVmHqMBQcA",
  authDomain: "shivbackend-ea05d.firebaseapp.com",
  databaseURL: "https://shivbackend-ea05d-default-rtdb.firebaseio.com",
  projectId: "shivbackend-ea05d",
  storageBucket: "shivbackend-ea05d.appspot.com",
  messagingSenderId: "246759899173",
  appId: "1:246759899173:web:c8ac16c850c7341ac13fcc",
  measurementId: "G-LSPVBMSLC1",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
