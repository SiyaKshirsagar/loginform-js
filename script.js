const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

showSignup.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

showLogin.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
