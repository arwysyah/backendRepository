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
registerCustomer: (data, callBack) => {
  db.query(
    `INSERT INTO customer(id_customer,email,password,phoneNumber,customerName,city,latitude,longitude,deviceID)values (?,?,?,?,?,?,?,?,?)`,
    [data.id_customer,data.email,data.password,data.phoneNumber, data.customerName,data.city,data.latitude,data.longitude,data.deviceID],
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  );
},
  getCustomer: callBack => {
    db.query(
      `select * from customer`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateCustomer: (data,id) => {
    return new Promise ((resolve, reject) => {
db.query(
            `UPDATE customer SET ? WHERE id_customer = ?`,[data,id],
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

  
  getCustomerbyEmail: (email, callBack) => {
    db.query(
      `select * from customer where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCustomerByID: (data,id) => {
    return new Promise ((resolve, reject) => {
db.query(
            `select * from customer WHERE id_customer = ?`,[data,id],
            (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            }
        );
    });
  }
};
