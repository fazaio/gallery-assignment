const album = require('../model/album')

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

function update(req, res) {
    res.send('update')
}

function upload(req, res) {
    res.send('upload')
}

function remove(req, res) {
    res.send('remove')
}


export { createAlbums, updateAlbums, removeAlbums, readAlbums, update, remove, upload }