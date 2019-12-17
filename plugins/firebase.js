import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA1Jvwy4RctqbW62biHAYS37jx3pr63opI",
    authDomain: "nuxtproject-7d900.firebaseapp.com",
    databaseURL: "https://nuxtproject-7d900.firebaseio.com",
    projectId: "nuxtproject-7d900",
    storageBucket: "nuxtproject-7d900.appspot.com",
    messagingSenderId: "794248302889",
    appId: "1:794248302889:web:9f2f0bf59336f9b4caa738",
    measurementId: "G-PS814FJW0K"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase