import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'; // Para la autenticación
import { getFirestore } from "firebase/firestore"; // Para Firestore (base de datos)
import 'firebase/storage'; // Para Firebase Storage (almacenamiento)
import 'firebase/functions'; // Para Firebase Functions (funciones en la nube)


const firebaseConfig = {
    apiKey: "AIzaSyD-t0Z2BIGUhZlDcu1gp4yrOZKRS_rFt0E",
    authDomain: "proyecto-laboratorio-1.firebaseapp.com",
    projectId: "proyecto-laboratorio-1",
    storageBucket: "proyecto-laboratorio-1.appspot.com",
    messagingSenderId: "268201422414",
    appId: "1:268201422414:web:f62bc102086cede77d5d1f",
    measurementId: "G-3TX7V6B33S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

export { db };


