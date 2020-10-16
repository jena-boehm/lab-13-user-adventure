// import functions and grab DOM elements
import { newUser } from './utils.js';
import { saveUser, getUser } from '../data/user-data.js';

const userName = document.querySelector('#name');
const radios = document.querySelectorAll('label > input');
const startButton = document.querySelector('#start');
const userSignUp = document.querySelector('#user-sign-up');

// initialize state

// set event listeners to update state and DOM

startButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(userSignUp);
    const user = newUser(formData);
    saveUser(user);

    window.location = '../class-schedule';
});


