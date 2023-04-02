import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZtO5gA6Yww-D8yyefV0n_8SNHJUgbYDA",
  authDomain: "maikon-store.firebaseapp.com",
  projectId: "maikon-store",
  storageBucket: "maikon-store.appspot.com",
  messagingSenderId: "303068516858",
  appId: "1:303068516858:web:843be23b0af9232d92d443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}