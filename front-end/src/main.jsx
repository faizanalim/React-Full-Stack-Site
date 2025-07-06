import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDNusYIDBonawRcIzGnTE5HnIks0779er8",

  authDomain: "full-stack-react-641e9.firebaseapp.com",

  projectId: "full-stack-react-641e9",

  storageBucket: "full-stack-react-641e9.firebasestorage.app",

  messagingSenderId: "183696286921",

  appId: "1:183696286921:web:31612b05304e6613389918"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
