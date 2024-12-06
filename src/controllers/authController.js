const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// 假设的用户数据库
const users = [
    { id: 1, username: 'user1', password: '$2a$10$CwTycUXWue0Thq9StjUM0uJ8/5Z6Z/0DxQH6H1JFkUM8hPD1mpgOe' } // 密码是"password123"
];

// 登录功能
function login(req, res) {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: '用户名或密码错误' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: '用户名或密码错误' });
    }

    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: 86400 }); // 令牌有效期24小时

    res.json({
        id: user.id,
        username: user.username,
        token: token
    });
}

module.exports = { login }; 