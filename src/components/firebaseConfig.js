
import * as firebase from "firebase/app";
import "firebase/database";
 
export var firebaseConfig = {
    apiKey: "AIzaSyBQzTY-87op4EoM0eC2vQCp5vdj8WxG_Ug",
    authDomain: "jc-portofolio-93953.firebaseapp.com",
    databaseURL: "https://jc-portofolio-93953.firebaseio.com",
    projectId: "jc-portofolio-93953",
    storageBucket: "jc-portofolio-93953.appspot.com",
    messagingSenderId: "206603161645",
    appId: "1:206603161645:web:eda0148f547a495b9468a4",
    measurementId: "G-STJ14QCLMS"
  };


firebase.initializeApp(firebaseConfig);
firebase.analytics();
//connection to database
export const dbRef = firebase.database();






