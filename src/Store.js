import { createStore } from 'vuex';

var store = createStore({
    state: {
        token: 'Mensaje por defecto'
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    getters: {
        getToken: state => state.token
    }
});

export default store;