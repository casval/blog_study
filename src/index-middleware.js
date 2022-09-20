const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url, ' ', 1);
  next().then(() => {
    console.log('END');
  });
});

app.use((ctx, next) => {
  console.log(2);
  next().then(() => {
    console.log('END2');
  });
});

app.use((ctx) => {
  console.log('hello world');
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('listening to port 4000');
});
