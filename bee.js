// bee.js — The Bee Brain 🐝

function beeTalk(text = "Tap me, I have a message for you.") {
  if (!window.speechSynthesis) return;

  const msg = new SpeechSynthesisUtterance(text);
  msg.pitch = 1.1;
  msg.rate = 1;
  msg.volume = 1;
  const voices = speechSynthesis.getVoices();
  msg.voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
  speechSynthesis.speak(msg);
}

function toggleBeeMenu() {
  const menu = document.getElementById("beeMenu");
  if (!menu) return;
  menu.classList.toggle("show");
  beeTalk("Choose where to go, my Royal.");
  
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}

function goTo(page) {
  window.location.href = page;
}

function startApp() {
  beeTalk("Welcome to BMSW. Let's begin.");
  toggleBeeMenu();
}

document.addEventListener("DOMContentLoaded", () => {
  const beeBtn = document.querySelector(".bee-btn");
  const isHome = window.location.pathname.includes("index.html") || window.location.pathname === "/";

  if (!beeBtn) return;

  if (isHome) {
    beeBtn.style.width = "65px";
    beeBtn.style.height = "65px";
    beeBtn.style.fontSize = "30px";
  } else {
    beeBtn.style.width = "45px";
    beeBtn.style.height = "45px";
    beeBtn.style.fontSize = "22px";
    beeBtn.style.opacity = "0.85";
  }
});