import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBs3XGfE_s9Kv495ZmeP_iFIVoq8uRFtMI',
    authDomain: 'portfolio-website-57333.firebaseapp.com',
    projectId: 'portfolio-website-57333',
    storageBucket: 'portfolio-website-57333.appspot.com',
    messagingSenderId: '730481256929',
    appId: '1:730481256929:web:8808fc66b6a73b179d4aa0',
}

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export default db
