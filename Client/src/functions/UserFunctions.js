import axios from 'axios'

export const register = newUser => {
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

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password,


        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data

        })
        .catch(err => {
            console.log(err)
        })
}



//admin insert

export const admininsert = newUser => {
    return axios
        .post('users/admininsert', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            role:newUser.role,
            authid:newUser.authid,
        })
        .then(res => {
            console.log('Admin inserted!')
        })
}


//student insert

export const studentinsert = newUser => {
    return axios
        .post('users/studentinsert', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            role:newUser.role,
            authid:newUser.authid,
        })
        .then(res => {
            console.log('Student inserted!')
        })
}
