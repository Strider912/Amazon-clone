import firebase from 'firebase'

const firebaseConfig =firebase.initializeApp({
    apiKey: "AIzaSyCVWuWs85D9XkSz7kSAdcTtuaDDnDttpGs",
    authDomain: "clone-bd77a.firebaseapp.com",
    projectId: "clone-bd77a",
    storageBucket: "clone-bd77a.appspot.com",
    messagingSenderId: "864186725874",
    appId: "1:864186725874:web:fea8d66aac7b54cc34276b"
  });

  const db = firebase.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db ,auth,provider}