/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 13:32:59
 * @LastEditTime: 2022-04-14 15:41:17
 * @LastEditors: PhilRandWu
 */
const express = require('express');

const app = express();

app.use(express.json());

app.post('/login', async (req, res) => {
    try {
        console.log(req.body.user,req.body.pass)
        if (req.body.user === 'root' && req.body.pass === 'root') {
            res.cookie('user', '小丁');
            res.cookie('session', '123');
            res.json({
                name: '小丁',
                msg: '登录成功',
                code: 200,
            });
        } else {
            res.json({
                code: 400,
                msg: '密码或者用户名错误'
            })
        }
    } catch (error) {
        console.log(error);
        res.statusCode(500).send('服务器错误');
    }
})

app.listen('8080',() => {
    console.log('服务器启动成功');
})
