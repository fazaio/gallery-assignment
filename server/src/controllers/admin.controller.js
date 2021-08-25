const album = require('../model/album')
const photo = require('../model/photo')
const user = require('../model/user')


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
async function detailPhoto(req, res) {
    try {
        const data = await photo.detail()
        res.send(data)
    } catch (e) {
        res.send('error!')
    }
}
async function createPhoto(req, res) {
    try {
        const data = await photo.create(req.body)
        res.send(data)
    } catch (e) {
        res.send(e)
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

async function removePhoto(req, res) {
    try {
        const data = await photo.remove(req.params.id)
        res.send(data)
    } catch (e) {
        res.send('error!')
    }
}

async function updatePhoto(req, res) {
    try {
        const data = await photo.update(req.params.id, req.body)
        res.send(data)
    } catch (e) {
        res.send('error!')
    }
}

// ------------- Auth --------------- //

async function signIn(req, res) {
    try {
        const data = await user.signIn(req.body)
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}




export { createAlbums, updateAlbums, removeAlbums, readAlbums, detailPhoto, createPhoto, readPhoto, removePhoto, updatePhoto, signIn }