import '@babel/polyfill';
import { login, logout } from './login';
import { update } from './updateSettings';
import { signup } from './signup';

const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav_el--logout');
const updateForm = document.querySelector('.form-user-data');
const passwordForm = document.querySelector('.form-user-password');
const signupForm = document.querySelector('.form--signup');

//VALUE

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (logoutBtn)
  logoutBtn.addEventListener('click', (e) => {
    logout();
  });

if (updateForm) {
  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    update({ name, email }, 'data');
  });
}

if (passwordForm) {
  passwordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save--password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await update({ passwordCurrent, password, passwordConfirm }, 'password');
    document.querySelector('.btn--save--password').textContent =
      'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    signup(name, email, password, passwordConfirm);
  });
}
