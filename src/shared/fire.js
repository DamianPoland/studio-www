import * as firebase from "firebase/app";

// add only imports used in project
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
import "firebase/analytics";

//process.env.REACT_APP_MEASUREMENT_ID
// firebase init
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "studio-com-a4a78.firebaseapp.com",
    databaseURL: "https://studio-com-a4a78.firebaseio.com",
    projectId: "studio--com",
    storageBucket: "studio--com.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire

export const auth = fire.auth()
export const firestore = fire.firestore()
export const functions = fire.functions()
export const storage = fire.storage()
export const messaging = firebase.messaging.isSupported() ? fire.messaging() : null // FCM nie jest wspierane w Safari więc trzeba zrobić ifa



