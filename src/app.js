const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// 中间件

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 基础路由
app.post('/', (req, res) => {
  res.json({ message: '服务器运行正常' });
});
app.post('/login', (req, res) => {
   console.log(req.body)
    res.json({ message: '服务器运行正常' });
  });
// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});