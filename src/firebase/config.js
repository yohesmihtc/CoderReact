import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAyXQC1MsSn7x0opRu0gfpqYZl1WFko284",
  authDomain: "tsl-coderhouse.firebaseapp.com",
  projectId: "tsl-coderhouse",
  storageBucket: "tsl-coderhouse.firebasestorage.app",
  messagingSenderId: "714475648363",
  appId: "1:714475648363:web:af6c89a4674d3efec0c82e",
  measurementId: "G-6EFGZWNT9F"
}

export const app = initializeApp(firebaseConfig)
