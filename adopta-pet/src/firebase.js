// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "**********************",
  authDomain: "*************",
  projectId: "*********",
  storageBucket: "***************",
  messagingSenderId: "**********",
  appId: "***************************",
  measurementId: "********", 
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore and Storage
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
