import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCThxkqRpTEB9rLJd_qqJZMWDCTwuvtvV0",
  authDomain: "smartgreenhouse-27f28.firebaseapp.com",
  databaseURL: "https://smartgreenhouse-27f28-default-rtdb.firebaseio.com", // ini wajib
  projectId: "smartgreenhouse-27f28",
  storageBucket: "smartgreenhouse-27f28.appspot.com",
  messagingSenderId: "833565988326",
  appId: "1:833565988326:web:d52c62cbdf15b3c1013227"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
