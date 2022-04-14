/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 22:09:37
 * @LastEditTime: 2022-04-14 22:29:22
 * @LastEditors: PhilRandWu
 */
export default function ({ store, redirect, route }) {
    if (!store.state.user) {
        redirect({ path: '/login', query: { url: route.path } })
    }
}
