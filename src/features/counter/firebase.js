import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCpmx4OPBJl7dqaS8xubJL_0Gr8bw2AGvU",
  authDomain: "disneyhotstarclone-4999a.firebaseapp.com",
  projectId: "disneyhotstarclone-4999a",
  storageBucket: "disneyhotstarclone-4999a.appspot.com",
  messagingSenderId: "535963780420",
  appId: "1:535963780420:web:f31fd63d0dc84f3ee40311"
};
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig=firebaseApp.firestore();
const auth= getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);


export{ auth,provider,storage,app};
export default dbConfig;

