const router = require('koa-router')();
const models = require('../models');
const models = require('../models');

const bodyParser = bodyparser({
  enableTypes: ['json', 'form', 'text']
});
router.prefix('/users');

router.get('/followList', async ctx => {
  const followList = await models.Follow.findAll();
  ctx.body = {
    followList
  };
});

router.post('/follow', bodyParser, async ctx => {
  const { nickname, school } = ctx.request.body;
  const followList = await models.Follow.create({ nickname, school });
  ctx.body = {
    followList
  };
});
module.exports = router;
