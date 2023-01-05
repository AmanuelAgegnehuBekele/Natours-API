import '@babel/polyfill';
import { login, logout } from './login';

const loginForm = document.querySelector('.form');
const logoutBtn = document.querySelector('.nav_el--logout');

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
