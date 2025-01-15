// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD3Igc2ir0InxdEtqvk0CwuHntJ_8pptFY',
    authDomain: 'portfolio-website-96167.firebaseapp.com',
    projectId: 'portfolio-website-96167',
    storageBucket: 'portfolio-website-96167.firebasestorage.app',
    messagingSenderId: '181283685937',
    appId: '1:181283685937:web:f9eeb0b02336701f3a7710',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
