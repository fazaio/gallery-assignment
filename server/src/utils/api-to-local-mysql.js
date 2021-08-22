const { default: axios } = require("axios");
const db = require('./src/config/db')

const storeToDb = async () => {
    const data = (await (axios.get('https://jsonplaceholder.typicode.com/photos'))).data
    for (const row of data) {
        const res = await sql(row)
        console.log(res);
    }
}


const sql = (payload) => {
    return new Promise((resolve) => {
        db.query('INSERT into photos SET ?', payload, (err, res, field) => {
            if (err) resolve('failed')
            resolve('success!')
        })
    })
}

storeToDb()