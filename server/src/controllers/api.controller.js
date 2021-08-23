const album = require('../model/album')
const photo = require('../model/photo')

async function readAlbums(req, res) {
    try {
        const data = await album.all()
        res.send(data)
    } catch (e) {
        res.send('errors!')
    }
}

async function readPhoto(req, res) {
    try {
        const data = await photo.all()
        res.send(data)
    } catch (e) {
        res.send('error!')
    }
}

export {readAlbums, readPhoto}