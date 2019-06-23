import axios from "axios";

export const addInstructor = newInstructor => {
    return axios
        .post('/api/instructors', {
            _id: newInstructor._id,
            nameInFull: newInstructor.nameInFull,
            nameWithInits: newInstructor.nameWithInits,
            faculty: newInstructor.faculty,
            email : newInstructor.email,
            address : newInstructor.address,
            userId : newInstructor.userId,
            joined : Date.now(),
            lastUpdate : Date.now(),
            bio : newInstructor.bio,
            contactNumber: newInstructor.contactNumber,
        })
        .then(res => {
            console.log('Instructor inserted!')
        })
}

export function getInstructors() {
    axios
        .get("https://randomuser.me/api/?results=5")
        .then(response =>
            response.data.results.map(user => ({
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                image: `${user.picture.thumbnail}`
            }))
        )
        .then(users => {
            this.setState({
                users,
                isLoading: false
            });
        })
        .catch(error => this.setState({ error, isLoading: false }));
}