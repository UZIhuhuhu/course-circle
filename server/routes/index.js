const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const models = require('../models');

const bodyParser = bodyparser({
  enableTypes: ['json', 'form', 'text']
});

router.get('/comments', async ctx => {
  const comments = await models.Comment.findAll({
    include: [models.Replys]
  });
  ctx.body = {
    comments
  };
});

router.get('/myComment', async ctx => {
  const comments = await models.Comment.findAll({
    where: {
      author: 'Salt'
    }
  });
  ctx.body = {
    comments
  };
});

router.get('/comment:id', async ctx => {
  const comment = await models.Comment.findOne({
    where: { id: ctx.params.id },
    include: [models.Replys]
  });
  ctx.body = {
    comment
  };
});

router.post('/addComment', bodyParser, async ctx => {
  const { title, text, author } = ctx.request.body;
  const comments = await models.Comment.create({ title, text, author });
  ctx.body = {
    comments
  };
});

module.exports = router;
