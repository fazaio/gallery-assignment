import db from '../config/db';

const create = (data) => {
    return new Promise((resolve, reject)=> {
        const sql = `INSERT INTO albums SET ?`
          db.query(sql, data, (err, res) => {
          if (err) reject('erros')
          resolve('success!')
        })
    })
}

const all = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM albums`, (err, res) => {
      if (err) reject('error!')
      resolve(res)
    })
  })
}

const remove = (name) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM albums WHERE name = '${name}'`, (err, res) => {
      if (err) reject('error')
      resolve('removed!')
    })
  })
}


export {create, all, remove}