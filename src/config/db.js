import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'movies-app-c7256.firebaseapp.com',
  projectId: 'movies-app-c7256',
  storageBucket: 'movies-app-c7256.appspot.com',
  messagingSenderId: '43005632958',
  appId: '1:43005632958:web:3a58034091519b4e3d19ef',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
