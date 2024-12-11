import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVZjBWVTb2GwBWJMGvH8Lvc18eBqsW6Vk",
    authDomain: "amnestyregistrationform.firebaseapp.com",
    projectId: "amnestyregistrationform",
    storageBucket: "amnestyregistrationform.firebasestorage.app",
    messagingSenderId: "71670543412",
    appId: "1:71670543412:web:115cb91cfb2476bd9b4661",
    measurementId: "G-R3QE5WLTT5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
