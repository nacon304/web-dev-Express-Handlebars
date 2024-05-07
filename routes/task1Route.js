const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller');

route.get("/", controller.task1);

module.exports = route;

// đây là nơi nhận đường dẫn từ người dùng