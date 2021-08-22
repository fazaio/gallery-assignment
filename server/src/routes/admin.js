import express from 'express';
// import db from '../config/db';
const controller = require('../controllers/admin.controller')
const routerAdmin = express.Router();

routerAdmin.get('/', function (req, res) {
  res.send('hi!')
})


routerAdmin.get('/albums', controller.readAlbums)
routerAdmin.post('/albums', controller.createAlbums)
routerAdmin.delete('/albums', controller.removeAlbums)
routerAdmin.put('/albums', controller.updateAlbums)

routerAdmin.get('/photo', controller.createPhoto)

module.exports = routerAdmin