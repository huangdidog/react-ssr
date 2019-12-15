/**
 * Created by huangdi on 2019/12/15.
 */
// 模拟接口

const express = require('express')
const app = express()

app.get('/api/course/list', (req, res)=>{
    // 支持跨域请求
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.json({
        code: 0,
        list: [
            {
                name: 'kkb1',
                id: 1
            },
            {
                name: 'kkb2',
                id: 2
            },
            {
                name: 'kkb3',
                id: 3
            },
            {
                name: 'kkb4',
                id: 4
            },
        ]
    })
})
app.listen('9090', ()=>{
    console.log('mock启动完毕')
})