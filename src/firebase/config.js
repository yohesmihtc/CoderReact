import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyXQC1MsSn7x0opRu0gfpqYZl1WFko284",
  authDomain: "tsl-coderhouse.firebaseapp.com",
  projectId: "tsl-coderhouse",
  storageBucket: "tsl-coderhouse.firebasestorage.app",
  messagingSenderId: "714475648363",
  appId: "1:714475648363:web:af6c89a4674d3efec0c82e",
  measurementId: "G-6EFGZWNT9F"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
