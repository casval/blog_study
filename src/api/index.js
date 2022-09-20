import Router from 'koa-router';
import posts from './posts';

const api = new Router();

api.get('/test', (ctx) => {
  console.log(ctx.request)
  ctx.body = 'test success!';
  console.log(ctx.response)
});

api.use('/posts', posts.routes());

export default api;
