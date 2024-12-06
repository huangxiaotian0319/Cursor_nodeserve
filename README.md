# Node.js 后端服务

一个基于 Express 和 MySQL 的 Node.js 后端服务项目。

## 功能特性

- Express 服务器框架
- MySQL 数据库 (Sequelize ORM)
- JWT 身份认证
- 请求速率限制
- 错误处理中间件
- 请求日志记录
- CORS 支持
- 热重载开发环境

## 项目结构

├── src/
│ ├── config/ # 配置文件
│ ├── controllers/ # 控制器
│ ├── middleware/ # 中间件
│ ├── models/ # 数据模型
│ ├── routes/ # 路由文件
│ └── app.js # 应用入口文件
├── .env # 环境变量
├── .gitignore
├── package.json
└── README.md

## 开始使用

### 环境要求

- Node.js >= 14.0.0
- MySQL >= 5.7

### 安装

1. 克隆项目

bash
git clone [项目地址]
cd [项目名称]

2. 安装依赖

bash:README.md
npm install

3. 配置环境变量
复制 `.env.example` 到 `.env` 并修改配置：

README.md
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret_key

4. 启动服务

bash

开发环境（带热重载）
npm run dev
生产环境
npm start

## API 文档

### 认证相关

#### 登录

POST /api/auth/login
Content-Type: application/json
{
"username": "your_username",
"password": "your_password"
}

### 用户相关

#### 获取所有用户

GET /api/users

#### 获取当前用户信息

GET /api/user/profile
Authorization: Bearer <token>

#### 更新用户信息

PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json
{
"username": "new_username"
}

## 中间件说明

- `auth.js`: JWT 认证中间件
- `errorHandler.js`: 全局错误处理
- `requestLogger.js`: 请求日志记录
- `rateLimiter.js`: 请求频率限制

## 开发

### 热重载

项目使用 nodemon 实现热重载，修改代码后会自动重启服务器。

### 调试

可以使用以下命令启动调试模式：

bash
npm run debug

## 部署

1. 构建项目

bash
npm run build

2. 启动服务

bash
npm start

## 测试

运行测试：

bash
npm test

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

- 作者：[您的名字]
- 邮箱：[您的邮箱]

这个README文件包含了：
项目概述
功能特性
项目结构
安装和使用说明
API文档
中间件说明
开发指南
部署说明
测试说明
贡献指南
许可证信息
联系方式
您可以根据实际需求修改或补充内容。需要我详细解释某个部分吗？