// 这里的node代码,会用babel处理
import　React from 'react'
import  {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'
import { StaticRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../src/store/store'

const app = express()

app.use(express.static("public"))

app.get('*', (req, res) => {
    // const Page = <App></App>
    // 把react组件,解析成html
    // const content = renderToString(App)
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                {App}
            </StaticRouter>
        </Provider>
    )
    // 字符串木板
    res.send(`
    <html>
        <head>
            <meta charset="utf-8">
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="./bundle.js"></script>
        </body>
    </html>
    `)
})
app.listen(8000, ()=> {
    console.log('8000端口启动成功!')
})