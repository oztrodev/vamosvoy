import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWNblvY9g5QBwSzTA_mZgEDSfUWONBSHE",
    authDomain: "vamosvoy-6666.firebaseapp.com",
    projectId: "vamosvoy-6666",
    storageBucket: "vamosvoy-6666.appspot.com",
    messagingSenderId: "504568663602",
    appId: "1:504568663602:web:0f51e7eac43eb677c9b62b",
    measurementId: "G-EDPNZ1V792"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta los módulos de autenticación y Firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Función para registrar un nuevo usuario
export const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };