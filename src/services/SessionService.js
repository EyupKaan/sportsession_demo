import axios from "axios";

const apiSession = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSessions() {
        return apiSession.get('/session')
    },
    getSession(id) {
        return apiSession.get('/session/' + id)
    },
    deleteSession(id) {
        return apiSession.delete('/session/'+ id)
    },
    postSession(session){
        return apiSession.post('/session', session)
    },
    getSports() {
        return apiSession.get('/sport')
    },
    getSport(id) {
        return apiSession.get('/sport/' + id)
    }
}