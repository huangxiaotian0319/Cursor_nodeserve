const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require('./config/database');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
const fileUpload = require('express-fileupload');
const { login } = require('./controllers/authController');
const app = express();
const port = process.env.PORT || 3000;

// 测试数据库连接
testConnection();

// 全局中间件
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(rateLimiter);
app.use(fileUpload({
  createParentPath: true
}));
// 路由
app.use('/api', require('./routes/user'));

// 错误处理中间件（放在所有路由之后）
app.use(errorHandler);

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});