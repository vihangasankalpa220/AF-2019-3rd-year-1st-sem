
import axios from 'axios'



export const isEmail = (email)  => {

    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
}




export const createUser = (newUser) => {

    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            role:newUser.role,

        })

        .then(res => {
            console.log('Registered!')
        })
}


export const login = (user) => {

    return axios
        .post('users/login', {
            email: user.email,
            password: user.password,


        })

}