const album = require('../model/album')
const photo = require('../model/photo')

async function detailPhoto(req, res) {
    try {
        const data = await photo.detail(req.params.id)
        res.send(data)
    } catch (e) {
        console.log('error');
        res.send(e)
    }
}

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

export {readAlbums, readPhoto, detailPhoto}