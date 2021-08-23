import express from 'express';

const controller = require('../controllers/admin.controller')
const routerAdmin = express.Router();

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

routerAdmin.get('/', function (req, res) {
  res.send('hi!')
})


routerAdmin.get('/albums', controller.readAlbums)
routerAdmin.post('/albums', controller.createAlbums)
routerAdmin.delete('/albums', controller.removeAlbums)
routerAdmin.put('/albums', controller.updateAlbums)

routerAdmin.get('/photo', controller.readPhoto)
routerAdmin.post('/photo', upload.single('avatar'), controller.createPhoto)
routerAdmin.put('/photo', controller.updatePhoto)
routerAdmin.delete('/photo', controller.removePhoto)

module.exports = routerAdmin