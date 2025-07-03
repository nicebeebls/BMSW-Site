// user.js — BMSW User Logic 🧠🐝

function setUser(roleType) {
  const codeName = "BMSW#" + Math.floor(1000 + Math.random() * 9000);
  const user = {
    name: "Hive User",
    role: roleType,
    code: codeName,
    points: 0
  };
  localStorage.setItem("bmsUser", JSON.stringify(user));
  window.location.href = "dashboard.html";
}

function getUser() {
  return JSON.parse(localStorage.getItem("bmsUser")) || null;
}

function showUserData() {
  const user = getUser();
  if (!user) {
    window.location.href = "signup.html";
    return;
  }

  if (document.getElementById("userName")) {
    document.getElementById("userName").innerText = user.name;
  }
  if (document.getElementById("userCode")) {
    document.getElementById("userCode").innerText = user.code;
  }
  if (document.getElementById("userRole")) {
    document.getElementById("userRole").innerText =
      user.role === "creator" ? "Creator / Partner" : "Customer";
  }
  showPoints(user.points);
}

function updatePoints(amount) {
  const user = getUser();
  if (user) {
    user.points += amount;
    localStorage.setItem("bmsUser", JSON.stringify(user));
    showPoints(user.points);
  }
}

function showPoints(points) {
  const el = document.getElementById("pointsDisplay");
  if (el) {
    el.innerText = `Royal Points: ${points}`;
  }
}