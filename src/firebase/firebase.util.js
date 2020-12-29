import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpwFRxuBP3f1eygvatwD0Pje9Xh4-ymgM',
  authDomain: 'nucba-zapi.firebaseapp.com',
  databaseURL: 'https://nucba-zapi.firebaseapp.com',
  projectId: 'nucba-zapi',
  storageBucket: 'nucba-zapi.appspot.com',
  messagingSenderId: '189832811325',
  appId: '1:189832811325:web:430f101fb4dd5baba06b54',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const singInWithGoogle = () => auth.signInWithPopup(provider);
