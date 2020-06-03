const db = require("../Configs/db");

module.exports = {


  getDriverItemPhoto: (data,id) => {
    return new Promise ((resolve, reject) => {
db.query(
            // `select * from driverPicture WHERE id_driverPicture= ?`,[data,id],
            `select * from photo WHERE id_driver= ?`,[data,id],
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
  postPhoto: body => {
    console.log(body)
      return new Promise((resolve, reject) => {
        db.query("INSERT INTO photo SET ?", [body], (err, response) => {
          
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        });
      });
    }
}
