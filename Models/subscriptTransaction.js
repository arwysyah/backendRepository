const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {

getsubTrans:()=>{
  
    return new Promise((resolve,reject)=>{
        db.query('select * from subtransaction',(error,status1)=>{
            if(!error)
            resolve(status1,200)
            else
            reject(error)
        })
    })
},
getsubTransByDate:(date)=>{
  
  return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM subtransaction WHERE date =?`,[date],(error,status1)=>{
          if(!error)
          resolve(status1,200)
          else
          reject(error)
      })
  })
},
postsubTrans: body => {
  console.log(body)
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO subtransaction SET ?", [body], (err, response) => {
        
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  getsubTransByID: id => {
    return new Promise((resolve,reject)=>{
        db.query('Select * from subtransaction where id_driver= ?',[id],(error,id1)=>{
    
            if (!error)
            resolve(id1)//mencobanya di console.log dulu
            else
            reject(error)
        });
    })
},
updatesubTransByID: (data,id) => {
  return new Promise ((resolve, reject) => {
db.query(
          `UPDATE subtransaction SET status= 'closed' WHERE id_transaction = ?`,[data,id],
          (err, response) => {
              if (!err) {
                  resolve (response);
              } else {
                  reject (err);
              }
          }
      );
  });
},
getsubTransByIDCustomer: id => {
  return new Promise((resolve,reject)=>{
      db.query('Select * from subtransaction where id_customer= ?',[id],(error,id1)=>{
  
          if (!error)
          resolve(id1)//mencobanya di console.log dulu
          else
          reject(error)
      });
  })
},
updatesubTransAccept: (data,id) => {
  return new Promise ((resolve, reject) => {
db.query(
          `UPDATE subtransaction SET status= 'aktif' WHERE id_transaction = ? `,[data,id],
          (err, response) => {
              if (!err) {
                  resolve (response);
              } else {
                  reject (err);
              }
          }
      );
  });
},
selectedbyDate:(date,id)=>{
  
  return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM subtransaction WHERE id_driver = ? and date= ?`,[date,id],(error,status1)=>{
          if(!error)
          resolve(status1,200)
          else
          reject(error)
      })
  })
},
}