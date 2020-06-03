const db = require("../Configs/db");

module.exports = {
//   registers: (data, callBack) => {
//     db.query(
//       `INSERT INTO vendor(email,password,phoneNumber,nama,kota,latitude,longitude,image_name)values (?,?,?,?,?,?,?)`,
//       [data.email,data.password,data.phoneNumber, nama,data.kota,data.latitude,data.longitude,image_name],
//       (error, results) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },
registerDriver: (data, callBack) => {
    
  db.query(
    `INSERT INTO driver(id_driver,email,password,phoneNumber,nama,platNumber,no_sim,plat_type,latitude,longitude,city,id_driverPicture,brand,model,color,fuel_type,category,years,online_status,productClass,accountStatus,status,deviceID)values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [data.id_driver,data.email,data.password,data.phoneNumber, data.nama,data.platNumber,data.no_sim,data.plat_type,data.latitude,data.longitude,data.city,data.id_driverPicture,data.brand,data.model,data.color,data.fuel_type,data.category,data.years,data.online_status,data.productClass,data.accountStatus,data.status,data.deviceID],
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  );
},
  getDriver: callBack => {
    db.query(
      `select * from driver`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDriverStatus: callBack => {
    db.query(
      `select * from driver where status= 'aktif'`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getDriverCar: callBack => {
    db.query(
      `select * from driver where category='mobil' and status= "aktif"`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  

  
  getDriverbyEmail: (email, callBack) => {
    db.query(
      `select * from driver where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateDriver: (data,id) => {
    return new Promise ((resolve, reject) => {
db.query(
            `UPDATE driver SET ? WHERE id_driver = ?`,[data,id],
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
  getDriverByID: (data,id) => {
    return new Promise ((resolve, reject) => {
db.query(
            `select * from driver WHERE id_driver = ?`,[data,id],
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
//   getDriverEconomy:() => {
//     return new Promise ((resolve, reject) => {
//         db.query(
//             'SELECT * FROM `driver` WHERE productClass = "Economy"',
//             (err, response) => {
//                 if (!err) {
//                     resolve (response);
//                 } else {
//                     reject (err);
//                 }
//             }
//         );
//     });
// },
// getDriverEconomyPlus:() => {
//   return new Promise ((resolve, reject) => {
//       db.query(
//           'SELECT * FROM `driver` WHERE productClass = "Economy Plus"',
//           (err, response) => {
//               if (!err) {
//                   resolve (response);
//               } else {
//                   reject (err);
//               }
//           }
//       );
//   });
// },
// getDriverBisnis:() => {
//   return new Promise ((resolve, reject) => {
//       db.query(
//           'SELECT * FROM `driver` WHERE productClass = "Bisnis"',
//           (err, response) => {
//               if (!err) {
//                   resolve (response);
//               } else {
//                   reject (err);
//               }
//           }
//       );
//   });
// },
// getDriverEksekutif:() => {
//   return new Promise ((resolve, reject) => {
//       db.query(
//           'SELECT * FROM `driver` WHERE productClass = "Eksekutif"',
//           (err, response) => {
//               if (!err) {
//                   resolve (response);
//               } else {
//                   reject (err);
//               }
//           }
//       );
//   });
// },
getDriverByProductClass:(data,productClass) => {
  return new Promise ((resolve, reject) => {
      db.query(
          `SELECT * FROM driver WHERE online_status = "Online" and productClass = ?`,[data,productClass],
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

}
