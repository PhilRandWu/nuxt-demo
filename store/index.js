/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 21:47:57
 * @LastEditTime: 2022-04-14 22:13:38
 * @LastEditors: PhilRandWu
 */
export const state = () => ({
    user: '',
    isLogin: false,
})

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setIsLogin(state, boolean) {
        state.isLogin = boolean;
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        const cookie = req && req.headers.cookie;
        const val = getCookie(cookie, 'session');
        if (val) {
            const user = getCookie(cookie, 'user');
            commit('setUser', user);
            commit('setIsLogin', true);
        }
    }
}

function getCookie(cookie, name) {
    if(!cookie) {
        return;
    }
    const cookies = cookie.split(';');
    for(let i = 0; i < cookies.length; i ++) {
        const [k,v] = cookies[i].split('=');
        if(k === name) {
            return v;
        }
    }
}
