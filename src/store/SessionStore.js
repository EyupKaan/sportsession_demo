import SessionService from "@/services/SessionService";
import { defineStore } from "pinia";

export const useSessionStore = defineStore('SessionStore', {
    state: () => ({
        sessions: [],
        sports: [],
        session: {},
        sport: {}
    }),
    getters: {
        numberOfSessions: state => state.sessions.length
    },
    actions: {
        fetchSessions() {
            return SessionService.getSessions().then(response => {
                this.sessions = response.data
            })
        },
        fetchSession(id){
            return SessionService.getSession(id).then(response => {
                this.session = response.data
            })
        },
        fetchSports() {
            return SessionService.getSports().then(response => {
                this.sports = response.data
            })
        },
        fetchSport(id){
            return SessionService.getSport(id).then(response => {
                this.sport = response.data
            })
        },
        createSession(session){
            return SessionService.postSession(session)
            .then(() => {
                this.session = session
            })
        }
    }
})