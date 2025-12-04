import { auth, db } from "./Firebase.js";
import { signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { ref, onValue } 
  from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      loginForm.style.display = "none";
      dashboard.style.display = "block";
      listenToSensors();
    })
    .catch(err => alert("Login gagal: " + err.message));
});

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    dashboard.style.display = "none";
    loginForm.style.display = "block";
  });
});

function listenToSensors() {
  const sensorRef = ref(db, "/");

  onValue(sensorRef, (snapshot) => {
    const d = snapshot.val() || {};

    updateSoil(d.humidity);
    updateLight(d.temperature);
    updateMotion(d.motion ?? 0);
  });
}

function updateSoil(value) {
  document.getElementById("soilMoisture").innerText = value + " %";
  const status = value < 30 ? "Kering" : value < 70 ? "Cukup" : "Basah";
  document.getElementById("soilStatus").innerText = status;
}

function updateLight(value) {
  document.getElementById("lightLevel").innerText = value + " %";
  const status = value < 30 ? "Redup" : value < 70 ? "Cukup" : "Terang";
  document.getElementById("lightStatus").innerText = status;
}

function updateMotion(value) {
  document.getElementById("motion").innerText = value ? "Terdeteksi" : "Tidak Terdeteksi";
  const status = value ? "Ada Gerakan" : "Aman";
  document.getElementById("motionStatus").innerText = status;
}
