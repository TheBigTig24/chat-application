// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUr3wBGgIIz3HQADJJHHdCeYaXRozdIWI",
  authDomain: "chat-application-b887f.firebaseapp.com",
  projectId: "chat-application-b887f",
  storageBucket: "chat-application-b887f.appspot.com",
  messagingSenderId: "700126170611",
  appId: "1:700126170611:web:4847b0370334881ce6d686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);