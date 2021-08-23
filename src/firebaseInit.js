import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyDepBgLL1cqykt1B6zZOv1g5XGEsi_mqzc",
    authDomain: "hdg-egg.firebaseapp.com",
    projectId: "hdg-egg",
    storageBucket: "hdg-egg.appspot.com",
    messagingSenderId: "646261248420",
    appId: "1:646261248420:web:ef7034c5cd2753d1bb3131",
    measurementId: "G-W3SQ79DRH3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();

/*
var db = firebase.firestore();
var data = [];


db.collection("EggList")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data());
        });
    });
//console.log(data);
export default data;
*/
