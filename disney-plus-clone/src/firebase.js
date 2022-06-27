import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBw_aXij5AMZgwVC_CTJuagmdDWNSDcf1c",
  authDomain: "disney-plus-clone-416f3.firebaseapp.com",
  projectId: "disney-plus-clone-416f3",
  storageBucket: "disney-plus-clone-416f3.appspot.com",
  messagingSenderId: "324013811365",
  appId: "1:324013811365:web:d8bb913a8ffa4d1b0dcf4c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;