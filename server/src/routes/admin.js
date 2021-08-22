import express from 'express';
// import db from '../config/db';
const controler = require('../controllers/admin.controller')
const routerAdmin = express.Router();

routerAdmin.get('/', function (req, res) {
  res.send('hi!')
})


routerAdmin.get('/albums', controler.readAlbums)
routerAdmin.post('/albums', controler.createAlbums)
routerAdmin.delete('/albums', controler.removeAlbums)
routerAdmin.put('/albums', controler.updateAlbums)

routerAdmin.post('/upload', controler.upload)
routerAdmin.put('/update', controler.update)
routerAdmin.get('/delete', controler.remove)


module.exports = routerAdmin