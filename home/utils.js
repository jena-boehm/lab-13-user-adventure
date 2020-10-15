// CREATE NEW USER FROM FORM INPUT
export function newUser(formData) {
    const user = {
        name: formData.get('name'),
        house: formData.get('house'),
        health: 50,
        points: 50,
        completed: {}
    };
    
    return user;
}

// STORE USER IN LOCAL STORAGE
export function saveUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('user', stringyUser);
}

// GET USER FROM LOCAL STORAGE
export function getUser() {
    const localStorageUser = localStorage.getItem('user');
    if (!localStorageUser) return null;
    const user = JSON.parse(localStorageUser);
    return user;
}