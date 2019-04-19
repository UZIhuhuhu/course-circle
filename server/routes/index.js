const router = require('koa-router')();
const models = require('../models');
router.get('/comments', async (ctx, next) => {
  const comments = await models.Comment.findAll();
  ctx.body = {
    comments
  };
});

router.get('/comments:id', async ctx => {
  const comment = await models.Comment.findOne({
    where: { id: ctx.params.id }
  });
  ctx.body = {
    comment
  };
});

module.exports = router;
