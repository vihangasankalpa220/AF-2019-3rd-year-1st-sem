import axios from 'axios'

//student insert

export const studentInsert = newUser => {
    return axios
        .post('students/studentInsert', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            nameInFull: newUser.nameInFull,
            nic: newUser.nic,
            contactNo: newUser.contactNo,
            faculty: newUser.faculty,
            email: newUser.email,
            password: newUser.password,
            role:newUser.role,

        })
        .then(res => {
            console.log('Student inserted!')
        })
}

