/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 21:46:45
 * @LastEditTime: 2022-04-14 22:08:45
 * @LastEditors: PhilRandWu
 */
export default function ({store, redirect}) {
    if(store.state.user) {
        redirect('/home');
    }
}
