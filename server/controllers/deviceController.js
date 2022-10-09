const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;

            // Создание локального имени с помощью пакета uuid функции v4 (генерация id) ¯\_(ツ)_/¯
            let fileName = uuid.v4() + ".jpg";

            // Указываем серверу эти файлы отдавать как статику спомощью модуля path
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            return res.json(device);

        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController();