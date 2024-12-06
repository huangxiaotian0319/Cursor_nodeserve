const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/upload', fileController.uploadFile);
router.post('/export', fileController.exportToExcel);

module.exports = router; 