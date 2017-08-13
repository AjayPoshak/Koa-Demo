const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const books = require('./controllers/books');

const db = require('./db');
const connect = db.connect(app);

app.use(bodyParser());
app.use(logger());

router.get('/', async(ctx) => {
    ctx.body = await ctx.app.booksData.find().toArray();
});

router.post('/book', async(ctx, next) => {
    ctx.body = await ctx.app.booksData.insert(ctx.request.body, {w:1});
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
