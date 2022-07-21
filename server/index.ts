const Koa = require("koa");
const cors = require("@koa/cors");
const Router = require("koa-router")
const ws = require("ws")
const bodyParser = require('koa-bodyparser');
const http = require("http")
const app = new Koa();
const server = http.createServer(app.callback());
const router = new Router()
const wss = new ws.Server({ server })

const obj = {
  ws: null
}

const proxy = new Proxy(obj, {
  set(obj, prop, value) {
    console.log("????????????");

    obj[prop] = value;
    return true;
  },
  get(obj, prop) {
    console.log("获取值");

    return obj[prop]
  }
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)

  })
  proxy.ws = ws
})

router.post("/api/url/add", async (ctx) => {
  console.log(proxy.ws, ctx.request.body);
  const { url } = ctx.request.body;
  proxy.ws?.send(url)
  ctx.body = { sucess: true }
})

router.get("/api/url", async (ctx) => {
  const urlsList = ["https://www.baidu.com/", "https://www.google.com/search?q=%E5%90%9B%E6%9C%89%E4%BA%91&oq=%E5%90%9B%E6%9C%89%E4%BA%91&aqs=chrome..69i57j46i512j0i512l8.3150j0j7&sourceid=chrome&ie=UTF-8"]
  ctx.body = { url: urlsList[Math.round(Math.random())] }
})

app.use(bodyParser())
app.use(cors())
app.use(router.routes())
server.listen(3000, () => {
  console.log("开启成功");
});