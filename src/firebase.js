import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBmJ4oHYSP3l6kZf0iHMZf8xIkOmbReUhA",
  authDomain: "authentication-ryley-byu.firebaseapp.com",
  databaseURL: "https://authentication-ryley-byu.firebaseio.com",
  projectId: "authentication-ryley-byu",
  storageBucket: "",
  messagingSenderId: "208372633959",
  appId: "1:208372633959:web:bf8ad94aace09730"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
