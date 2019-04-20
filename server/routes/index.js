const router = require('koa-router')();
const models = require('../models');
// const bodyparser = require('koa-bodyparser');

router.get('/comments', async (ctx, next) => {
  const comments = await models.Comment.findAll();
  ctx.body = {
    comments
  };
});

router.get('/comment:id', async ctx => {
  const comment = await models.Comment.findOne({
    where: { id: ctx.params.id }
  });
  ctx.body = {
    comment
  };
});

router.post('/addComment', async ctx => {
  console.log(ctx);
  console.log(ctx.request);
  const comments = await models.Comment.create(ctx.request.body.comment);
  ctx.body = {
    comments
  };
});

module.exports = router;
