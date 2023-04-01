import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //para la base de datos

const firebaseConfig = {
  apiKey: "AIzaSyD54sggFgEvo8gDM-VcQzu6pfG-1SEgpBU",
  authDomain: "huellas-tienda.firebaseapp.com",
  projectId: "huellas-tienda",
  storageBucket: "huellas-tienda.appspot.com",
  messagingSenderId: "751003862081",
  appId: "1:751003862081:web:1c429c1da71cad46deb2c0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);      //creamos la base de datos


//exportamos la base de datos, db, para poder usarla en cualquier componente
export default db 
