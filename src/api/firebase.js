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
  signInWithPopup(auth, provider)
    .then((result) => {
      //   const user = result.user;
    })
    .catch((error) => {
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
  const addNowTimeToHistory =
    todayHistory.length === 0 ? [time] : [...todayHistory[0], time];
  return set(ref(database, `users/${uid}/history/${date}`), {
    smokeTime: addNowTimeToHistory,
  });
}

export async function getTodaySmokeHistory(uid, date) {
  return get(ref(database, `users/${uid}/history/${date}`)) //
    .then((snapshot) => {
      const history = snapshot.val() || {};
      return Object.values(history);
    });
}

export async function getAllSmokeHistory(uid) {
  return get(ref(database, `users/${uid}/history`)) //
    .then((snapshot) => {
      if (snapshot.exists) {
        const smokeHistory = snapshot.val();
        if (smokeHistory === null) return {};

        Object.keys(smokeHistory).forEach((sh) => {
          smokeHistory[sh] = smokeHistory[sh].smokeTime;
        });
        return smokeHistory;
      } else {
        return {};
      }
    });
}

export async function insertOrUpdateGoal(uid, goal) {
    goal.weekGoal = Number(goal.weekGoal);
    goal.monthGoal = Number(goal.monthGoal);
  return set(ref(database, `users/${uid}/goal`), goal);
}

export async function getUserGoal(uid) {
  return get(ref(database, `users/${uid}/goal`)) //
    .then((snapshot) => {
      return snapshot.val();
    });
}

export async function getLastSmokeTime(uid) {
  return get(ref(database, `user/${uid}`))
}