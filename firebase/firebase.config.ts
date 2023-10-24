import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHbNre43GxiB_EcXvWlU2lz6y3XSxWAz8",
  authDomain: "managea-895d7.firebaseapp.com",
  databaseURL:
    "https://managea-895d7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "managea-895d7",
  storageBucket: "managea-895d7.appspot.com",
  messagingSenderId: "261727626259",
  appId: "1:261727626259:web:2cdf1827207cd8f26b0be6",
};

// Initialize Firebase
let app;

// Vérifie si une application Firebase existe déjà
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Utilise l'application Firebase existante
}

const database = getDatabase(app);

export { database };
