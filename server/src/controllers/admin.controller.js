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
async function createPhoto(req, res) {
    try {
        res.send('uploaded!')
    } catch (e) {
        console.log('error');
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
        await photo.remove(req.body)
    } catch (e) {
        res.send('error!')
    }
}

async function updatePhoto(req, res) {
    try {
        await photo.update(req.body)
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




export { createAlbums, updateAlbums, removeAlbums, readAlbums, createPhoto, readPhoto, removePhoto, updatePhoto, signIn }