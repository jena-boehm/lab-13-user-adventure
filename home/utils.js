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