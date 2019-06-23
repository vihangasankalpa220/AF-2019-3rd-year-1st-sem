import axios from 'axios'

//student insert

export const studentInsert = newUser => {
    return axios
        .post('students/studentInsert', {
            userId: newUser.userId,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
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

