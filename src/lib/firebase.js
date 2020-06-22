import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxJzE0zg-UyYINSqc3Yv-spK_whfoppOM",
  authDomain: "stab-high-chat.firebaseapp.com",
  databaseURL: "https://stab-high-chat.firebaseio.com",
  projectId: "stab-high-chat",
  storageBucket: "stab-high-chat.appspot.com",
  messagingSenderId: "984106797947",
  appId: "1:984106797947:web:48d2258ace59d1de67cbde",
  measurementId: "G-8S36WB10D6"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
