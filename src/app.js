const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const books = require('./controllers/books');

router.get('/', books.list);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
