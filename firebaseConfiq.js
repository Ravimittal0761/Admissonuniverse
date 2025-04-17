import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8wnCj8NOlwLxtWu7s7yjVcAqOSjOKu3Q",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-id",
  appId: "your-app-id"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, firebaseConfig };
