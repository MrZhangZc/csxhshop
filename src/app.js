import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import opn from 'opn'

import { database } from './database'

const PORT = process.env.PORT || 3333
const HOST = process.env.HOST || '127.0.0.1'

database()

const ApiRouter = require('./router')

const app = new Koa()
const router = new Router();

app.use(bodyParser())

const staticPath = '../static'
app.use(KoaStatic(
    path.join(__dirname, staticPath)
))
app.use(views(path.join(__dirname, './views/pages'), {
    extension: 'pug'
}))

router.use('', ApiRouter.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, HOST, () => {
    console.log(`程序成功运行过在 ${PORT} 端口`)
})

//opn('http://localhost:3333')