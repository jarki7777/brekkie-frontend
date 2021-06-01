/* eslint-disable */
export const validateUsername = (username) => {
    const validUsername = /^([a-z0-9]|[-._](?![-._])){4,20}$/i.test(username);
    if (!validUsername) return `Username can't contain whitespaces must be between 4 
    and 20 characters, can contain only letters, numbers and any of these non consecutive 
    special characters '-._''`;
    return null
}
export const validateEmail = (email) => {
    const validEMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    .test(email);
    if (!validEMail) return `E-mail must be a valid email address`;
    return null
}
export const validatePassword = (password) => {
    const validPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&?¿¡*-+.,:;<>/])[A-Za-z\d[!#$%&?¿¡*-+.,:;<>/]{8,32}$/gm
        .test(password)
    if (!validPw) return `Password must be between 8 and 32 characters, contain at least 1 lowercase 
    letter, 1 uppercase letter, 1 number and one of this special characters '!#$%&?¿¡*-+.,:;<>`;
    return null
}
/* eslint-disable */