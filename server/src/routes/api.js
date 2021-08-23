import express from 'express';
const controller = require('../controllers/api.controller')
const routerApi = express.Router();

routerApi.get('/albums', controller.readAlbums)
routerApi.get('/photos', controller.readPhoto)

module.exports = routerApi