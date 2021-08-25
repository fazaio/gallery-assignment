import express from 'express';

const auth = require('../middlewares/auth')
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


routerAdmin.get('/albums', auth, controller.readAlbums)
routerAdmin.post('/albums', auth, controller.createAlbums)
routerAdmin.delete('/albums', auth, controller.removeAlbums)
routerAdmin.put('/albums', auth, controller.updateAlbums)

routerAdmin.get('/photo', auth, controller.readPhoto)
routerAdmin.post('/photo', auth, controller.createPhoto)
routerAdmin.put('/photo/:id', auth, controller.updatePhoto)
routerAdmin.delete('/photo/:id', auth, controller.removePhoto)

routerAdmin.post('/auth', controller.signIn)

module.exports = routerAdmin