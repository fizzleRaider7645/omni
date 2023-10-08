import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

// Middleware
app.use(bodyParser());

// Sample route
router.get("/", (ctx: Koa.Context) => {
  ctx.body = "Welcome to User Service!";
});

app.use(router.routes()).use(router.allowedMethods());

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
