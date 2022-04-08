const Server = require('./koaServer/coreServer');
const PORT = require('./config/config');

const app = new Server();
console.log('a');
app.init();

app.use(async (ctx, next) => {
  await next();
});

app.listen(PORT);
