export function createCompletedClass(hogwartsClass) {
    const span = document.createElement('span');
    span.classList.add('class');
    span.classList.add('completed');
    
    span.textContent = hogwartsClass.title;
    return span;
}

export function createClassLink(hogwartsClass) {
    const classLink = document.createElement('a');
    classLink.classList.add('class');
    classLink.href = '../quest/?id=' + hogwartsClass.id;

    classLink.textContent = hogwartsClass.title;
    return classLink;
}