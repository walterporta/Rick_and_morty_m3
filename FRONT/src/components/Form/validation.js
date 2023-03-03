const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//const regexEmail2 = /^[A-Z09._%+-]+@[A+Z0-9.-]+\\.[A-Z]{2,4}$/i; (da error)
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;


export function validate(objUser){
    const errors = {};

    if(!regexEmail.test(objUser.username)){
        errors.username = "El usuario debe ser un email";
    } else if (!objUser.username){
        errors.username = "El nombre de usuario no puede estar vacio";
    } else if (objUser.username.length > 35) {
        errors.username = "El nombre de usuario no puede tener mas de 35 caracteres";
    }

    if(!regexPassword.test(objUser.password)){
        errors.password = "La contraseña debe tener al menos un numero";
    } else if (objUser.password.length < 6 || objUser.password.length > 10){
        errors.password = "La contrasela debe tener una longitud entre 6 y 10 caracteres";
    }
        return errors;
}


