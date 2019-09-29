import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDKgxDkAYBDjxtIUuJEoQOwAbzi1I00lOA",
  authDomain: "firstproject-37738.firebaseapp.com",
  databaseURL: "https://firstproject-37738.firebaseio.com",
  projectId: "firstproject-37738",
  storageBucket: "firstproject-37738.appspot.com",
  messagingSenderId: "344969216673",
  appId: "1:344969216673:web:db5a316690036a70"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire