import db from '../config/db';

const create = (data) => {
    return new Promise((resolve, reject)=> {
        const sql = `INSERT INTO photos SET ?`
          db.query(sql, data, (err, res) => {
          if (err) reject(err)
          resolve('created!')
        })
    })
}

const all = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM photos`, (err, res) => {
      if (err) reject('error!')
      resolve(res)
    })
  })
}

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM photos WHERE id = '${id}'`, (err, res) => {
      if (err) reject('error')
      resolve('removed!')
    })
  })
}

const update = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE photos SET ? where id = '${id}'`, data,(err, res) => {
            if (err) reject('error!')
            resolve('updated!')
        })
    })
}

const detail = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM photos WHERE id = '${id}'`,(err, res) => {
            if (err) reject('error!')
            resolve(res)
        })
    })
}


export {create, all, remove, update, detail}