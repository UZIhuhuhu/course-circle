const router = require('koa-router')();
const models = require('../models');
// const bodyparser = require('koa-bodyparser');

router.prefix('/users');

router.get('/followList', async ctx => {
  const followList = await models.Follow.findAll();
  ctx.body = {
    followList
  };
});

router.post('/follow', async ctx => {
  const followList = await models.Follow.create(ctx.request.body.nickname);
  ctx.body = {
    followList
  };
});
module.exports = router;
