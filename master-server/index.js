const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const services = [];

router.post('/register', async ctx => {
	services.push({service : ctx.request.body});
	ctx.body = 'GOT YOU!'
});

router.get('/services', async ctx => ctx.body = JSON.stringify(services));

app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);