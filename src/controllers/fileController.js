const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

class FileController {
    // 处理文件上传
    async uploadFile(req, res) {
        try {
            const file = req.files.file;
            const uploadPath = path.join(__dirname, '../uploads/', file.name);
            
            await file.mv(uploadPath);
            
            return res.status(200).json({
                success: true,
                message: '文件上传成功',
                path: uploadPath
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '文件上传失败',
                error: error.message
            });
        }
    }

    // 导出Excel文件
    async exportToExcel(req, res) {
        try {
            const data = req.body.data; // 假设数据从请求体传入
            
            const workbook = xlsx.utils.book_new();
            const worksheet = xlsx.utils.json_to_sheet(data);
            
            xlsx.utils.book_append_sheet(workbook, worksheet, '数据表');
            
            const exportPath = path.join(__dirname, '../exports/', `export-${Date.now()}.xlsx`);
            
            xlsx.writeFile(workbook, exportPath);
            
            return res.download(exportPath);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '导出失败',
                error: error.message
            });
        }
    }
}

module.exports = new FileController(); 