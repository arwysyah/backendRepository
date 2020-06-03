const db = require("../Configs/db");

module.exports = {
  register: (data, callBack) => {
    db.query(
      `INSERT INTO vendor(username,password,email,address,phone_number)values (?,?,?,?,?)`,
      [data.username,data.password,data.email, data.address,data.phone_number],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getVendor: callBack => {
    db.query(
      `select id_vendor,username,email,address,phone_number from vendor`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  
  getVendorbyEmail: (email, callBack) => {
    db.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
