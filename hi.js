// On load, check localStorage
window.onload = () => {
  const user = localStorage.getItem("user");
  if (user) {
    showDashboard(user);
  }
};

// Switch between login/register forms
function toggleForm(form) {
  document.getElementById("login-form").classList.toggle("hidden", form !== "login");
  document.getElementById("register-form").classList.toggle("hidden", form !== "register");
}

// Register
function register() {
  const user = document.getElementById("register-username").value;
  const pass = document.getElementById("register-password").value;
  const message = document.getElementById("register-message");

  if (!user || !pass) {
    message.style.color = "red";
    message.innerText = "Fill all fields.";
    return;
  }

  localStorage.setItem("account_" + user, pass);
  message.style.color = "green";
  message.innerText = "Registered successfully!";
}

// Login
function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;
  const storedPass = localStorage.getItem("account_" + user);
  const message = document.getElementById("login-message");

  if (storedPass === pass) {
    localStorage.setItem("user", user);
    showDashboard(user);
  } else {
    message.style.color = "red";
    message.innerText = "Invalid credentials.";
  }
}

// Logout
function logout() {
  localStorage.removeItem("user");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("auth-container").style.display = "block";
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}

// Show dashboard
function showDashboard(user) {
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("user-name").innerText = user;
}

// Calculator functions
const display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Error";
  }
}
