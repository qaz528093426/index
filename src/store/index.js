import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = {
    state: {
        client : location.href.includes('origin') ? 'origin' : 'std',
        profile: {
            server: "蝶恋花",
        },
        server: "蝶恋花",
        config: {
            index_live_status: 0,
            index_video_status: 0,
            index_live_url: "",
            index_video_url: "",
        },
    },
    mutations: {},
    getters: {},
    actions: {},
    modules: {},
};

export default new Vuex.Store(store);
