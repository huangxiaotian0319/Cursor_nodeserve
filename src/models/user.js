const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  // 如果表已经存在，不要尝试重新创建表
  freezeTableName: true,
  timestamps: false
});

module.exports = User; 