const { default: axios } = require("axios");
const db = require('../config/db')

const storeToDb = async () => {
    return new Promise(async (resolve) => {
        const data = (await (axios.get('https://jsonplaceholder.typicode.com/photos'))).data
        for (const row of data) {
            await sql(row)
        }
        resolve(1)
    })
}

const createTable = () => {
    return new Promise((resolve, reject) => {
        const sql = 'CREATE TABLE `photos` ( `id` int(20) NOT NULL, `albumId` int(20) DEFAULT NULL, `title` varchar(200) NOT NULL, `url` varchar(200) NOT NULL, `thumbnailUrl` varchar(200) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; '
        db.query(sql, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

const sql = (payload) => {
    return new Promise((resolve) => {
        db.query('INSERT into photos SET ?', payload, (err, res, field) => {
            if (err) resolve('failed')
            resolve('success!')
        })
    })
}

const users = () => {
    return new Promise((resolve) => {
        const create = new Promise((resolve) => {
        const sql = 'CREATE TABLE `users` ( `id` int(11) NOT NULL, `username` varchar(200) NOT NULL, `password` varchar(200) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;'
        db.query(sql, (err, res, field) => {
            if (err) resolve('failed')
            resolve('success!')
        })
    })

    const insert = new Promise((resolve) => {
        const sql = "INSERT INTO `users` (`id`, `username`, `password`) VALUES (1, 'admin', '$2b$10$.jNIMVRU3SdqZLcPS4QDmOfmB5Z9w3yjteh7/HkOqvN.t5r3om8F2');"
        db.query(sql, (err, res, field) => {
            if (err) resolve('failed')
            resolve('success!')
        })
    })

        Promise.all([create, insert]).then(res => {
            console.log('created user . . . .');
            resolve()
        })
    })
}

async function seed() {
    console.log('!.. . . . .');
    const create = await createTable()
    const store = await storeToDb()
    const user = await users()
    Promise.all([create, store, user]).then(res => {
        console.log('Done!. . . ');
        process.exit()
    }).catch(e => console.log(e))
}

seed()