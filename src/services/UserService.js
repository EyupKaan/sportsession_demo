import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getUsers() {
        return apiClient.get('/user')
    },
    getUser(id) {
        return apiClient.get('/user/'+id)
    },
    postUser(user) {
        return apiClient.post('/user', user)
    },
    loginUser(user){
        return apiClient.get('/login?'+'username='+user.userName+'&password='+user.password)
    },
    deleteUser(id) {
        return apiClient.delete('/user/' + id)
    }
    
}