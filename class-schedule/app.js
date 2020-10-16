import classes from '../data/class-data.js';
import { saveUser, getUser } from '../data/user-data.js';
import { createCompletedClass, createClassLink } from './utils.js';

const nav = document.querySelector('#class-links');
const user = getUser();

for (let i = 0;i < classes.length; i++) {
    const hogwartsClass = classes[i];
    let classSchedule = null;

    if (user.completed[hogwartsClass.id]) {
        classSchedule = createCompletedClass(hogwartsClass);
    }
    else {
        classSchedule = createClassLink(hogwartsClass);
    }
    nav.appendChild(classSchedule);
}