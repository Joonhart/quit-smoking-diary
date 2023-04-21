import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import moment from "moment";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch((error) => {
    console.log("Google Login Error!");
  });
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

export async function addSmokeHistory(uid) {
  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");

  const todayHistory = await getTodaySmokeHistory(uid, date);
  console.log(todayHistory);
  const addNowTimeToHistory = todayHistory.length === 0 ? [time] : [...todayHistory[0], time];

  console.log(addNowTimeToHistory);
  return set(ref(database, `users/${uid}/${date}`), {
    history: addNowTimeToHistory,
  });
}

export async function getTodaySmokeHistory(uid, date) {
  return get(ref(database, `users/${uid}/${date}`)) //
    .then((snapshot) => {
      const history = snapshot.val() || {};
      return Object.values(history);
    });
}

export async function getAllSmokeHistory(uid) {
    return get(ref(database, `users/${uid}`)) //
        .then(snapshot => {
            return Object.values(snapshot.val() || {})
        }) 
}
