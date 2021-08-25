import express from 'express';
const controller = require('../controllers/api.controller')
const routerApi = express.Router();


routerApi.get('/albums', controller.readAlbums)
routerApi.get('/albums', controller.readAlbums)
routerApi.get('/photos', controller.readPhoto)
routerApi.get('/photo/:id', controller.detailPhoto)

module.exports = routerApi