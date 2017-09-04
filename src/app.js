const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');


const db = require('./global/bootstrap');
const connect = db.connect();

app.use(bodyParser());
app.use(logger());

require('./routes/index')(router);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
