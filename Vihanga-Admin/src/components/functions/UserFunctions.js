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

           // console.log("Hi");
           // console.log(res.status);
           // console.log(res.data);

            if(res.data.error===undefined || res.data.error==null){
                localStorage.setItem('usertoken', res.data);
                window.location.href="/";
                alert("login");

            }
            else{
                alert("email and password incorrect");
                window.location.reload();
            }
            /*if (res.status == 200) {
                let us=res.data;
                if(us==undefined||us==null){

                    window.location.reload();
                }else{
                    localStorage.setItem('usertoken', res.data)
                    window.location.reload();
                    return res.data
                }

            }
else {
                alert("email and password incorrect");
                window.location.reload();

            }*/



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

        })
        .then(res => {
            console.log('Student inserted!')
        })
}

export const instructor = newUser => {
    return axios
        .post('users/instructor', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            role:newUser.role,

        })
        .then(res => {
            console.log('Instructer inserted!')
        })



}



export const courseinsert = newCourse => {
    return axios
        .post('courses/courseinsert', {
            courseid:newCourse.courseid,
            course_name: newCourse.course_name,
            discription: newCourse.discription,
            status: newCourse.status,


        })
        .then(res => {
            console.log('Course inserted!')
        })
}