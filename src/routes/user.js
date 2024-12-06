const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 获取所有用户
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('获取用户数据失败:', error);
    res.status(500).json({
      success: false,
      message: '获取用户数据失败',
      error: error.message
    });
  }
});

// 获取单个用户
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (user) {
      res.json({
        success: true,
        data: user
      });
    } else {
      res.status(404).json({
        success: false,
        message: '未找到用户'
      });
    }
  } catch (error) {
    console.error('获取用户数据失败:', error);
    res.status(500).json({
      success: false,
      message: '获取用户数据失败',
      error: error.message
    });
  }
});

module.exports = router; 