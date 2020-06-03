const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {

getTransaction :()=>{
  
    return new Promise((resolve,reject)=>{
        db.query('select * from transaction',(error,status1)=>{
            if(!error)
            resolve(status1,200)
            else
            reject(error)
        })
    })
},
postTransaction: body => {
  console.log(body)
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaction SET ?", [body], (err, response) => {
        
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
}