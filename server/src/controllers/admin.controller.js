const album = require('../model/album')
const photo = require('../model/photo')


// ------ Controler Album ----------- //
async function createAlbums(req, res) {
    try {
        await album.create(req.body)
        res.send('success')
    } catch (e) {
        res.send('errors!')
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

async function removeAlbums(req, res) {
    try {
        await album.remove()
        res.send('success')
    } catch (e) {
        res.send('errors!')
    }
}

function updateAlbums(req, res) {
    res.send('edit')
}

// ------ Controler Photo ----------- //
async function createPhoto(req, res) {
    try {
        await photo.create(req.body)
    } catch (e) {
        res.send('error!')
    }
}


export { createAlbums, updateAlbums, removeAlbums, readAlbums, createPhoto }