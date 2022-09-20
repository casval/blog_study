require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB: 27017');
  })
  .catch((e) => {
    console.lerror(e);
  });

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.use('/api', api.routes());

// router.get('/', (ctx) => {
//   ctx.body = '홈';
// });

// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '빈 소개';
// });

// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `post #${id}` : `포스트 아이디가 없습니다.`;
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT || 4000, () => {
  console.log(`listening to port ${PORT || 4000}...`);
});
