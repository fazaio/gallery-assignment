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
    db.query(`SELECT DISTINCT albumId FROM photos`, (err, res) => {
      if (err) reject('error!')
      resolve(res)
    })
  })
}

const detail = (x) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM photos WHERE albumId = ?`, x, (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}

const uncategorized = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM photos WHERE albumId IS NULL`, (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}



const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM photos WHERE albumId = '${id}'`, (err, res) => {
      if (err) reject('error')
      resolve('removed!')
    })
  })
}

const lastAlbumId = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM photos ORDER BY albumId DESC LIMIT 0, 1`, (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}

export { create, all, remove, detail, uncategorized, lastAlbumId}