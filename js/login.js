// login.js – Toggle between login and signup forms

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active-form");
  signupForm.classList.remove("active-form");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active-form");
  loginForm.classList.remove("active-form");
});

// Simulate login/signup (no backend)
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful (demo)");
  // In a real app, you'd redirect or handle authentication
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Signup successful (demo) – you can now login");
  loginTab.click(); // switch to login tab
});
