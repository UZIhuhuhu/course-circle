import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-morgan';
import * as parser from 'koa-body';
import * as models from './models';

const app = new Koa();
const router = new Router();
const bodyParser = parser();

router.get('/comments', async ctx => {
  const comments = await models.Comment.findAll();
  ctx.body = {
    comments
  };
});

router.get('/comments/:id', async ctx => {
  const comment = await models.Comment.findOne({
    where: { id: ctx.params.id }
  });
  ctx.body = {
    comment
  };
});

router.put('/comments/:id', bodyParser, async ctx => {
  let comment = await models.Comment.findOne({ where: { id: ctx.params.id } });
  comment = await comment.update(ctx.request.body.comment);
  ctx.body = {
    comment
  };
});

router.post('/comments', bodyParser, async ctx => {
  const comment = await models.Comment.create(ctx.request.body.comment);
  ctx.body = {
    comment
  };
});

app
  .use(logger('tiny'))
  .use(router.routes())
  .listen(3000);
