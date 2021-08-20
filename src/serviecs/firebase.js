import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
   
        apiKey: "AIzaSyArH6_YAogfplvpqZQOMa0Ijniyui_-lIE",
        authDomain: "chatapp-1efe7.firebaseapp.com",
        projectId: "chatapp-1efe7",
        storageBucket: "chatapp-1efe7.appspot.com",
        messagingSenderId: "115708279888",
        appId: "1:115708279888:web:fce900f4710a6afe81e555"
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
require('firebase/firestore')
export default firebase;