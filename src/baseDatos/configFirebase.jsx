import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "cuvee-6558c.firebaseapp.com",
    projectId: "cuvee-6558c",
    storageBucket: "cuvee-6558c.firebasestorage.app",
    messagingSenderId: "717265152747",
    appId: "1:717265152747:web:fa4d35a5b954a9aa9facae"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };