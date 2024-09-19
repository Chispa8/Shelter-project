// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEb5nnV9Uz3hIQGe87UxLPMRKRIvMhBvE",
  authDomain: "shelter-app-e67e8.firebaseapp.com",
  projectId: "shelter-app-e67e8",
  storageBucket: "shelter-app-e67e8.appspot.com",
  messagingSenderId: "319843378560",
  appId: "1:319843378560:web:49145666425409f1ad4d65",
  measurementId: "G-DENFP33LBK", // Este no es necesario si no usas Analytics
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore and Storage
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
