const {
  registerCustomer,
  getCustomer,
  getCustomerbyEmail,
  updateCustomer,
  getCustomerByID,
} = require("../Models/customer");
const db = require("../Configs/db"); //karena ini tempatnya query jadi kita butuh akses database
const fs = require("fs");
const form = require("../Helpers/resForm");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const mv = require("mv");
const { sign } = require("jsonwebtoken");
module.exports = {
  registerCustomer: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    const email = req.body.email;

    getCustomerbyEmail(email, (error, results) => {
      if (results) {
        return res.json({
          message: "Email already taken , please use with different email",
        });
      }

      registerCustomer(body, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            success: 0,
            message: "database connetion error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    });
  },

  getCustomer: (req, res) => {
    getCustomer((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  login: (req, res) => {
    const email = req.body.email;
    getCustomerbyEmail(email, (error, results) => {
      if (error) {
        return console.log(error);
      }
      if (!results) {
        return res.json({
          succes: 0,
          message: "Data Not Found, Please Register",
        });
      }
      console.log(results);
      const result = compareSync(req.body.password, results.password);
      console.log("req password dan hash", req.body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.SECRET_KEY, {
          expiresIn: "24h",
        });
        return res.json({
          succes: 1,
          message: "login succesfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "invalid email or password",
        });
      }
    });
  },
  // updateCustomer:(req,res)=>{
  //     const body = req.body;
  //     const salt = genSaltSync(10)
  //     body.password = hashSync(body.password,salt)
  // updateCustomer(body,(error,results)=>{
  //     if(error){
  //         console.log(error)
  //         return;
  //     }
  //     if(!results){
  //         res.json({
  //             succes:'0',
  //             message:"record is not found"
  //         })
  //     }
  //     return res.json({
  //         success: 1,
  //         message:"user success to update"
  //     })

  // })

  // },
  updateCustomer: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    // const salt = genSaltSync(10)
    // data.password = hashSync(data.password,salt)
    updateCustomer(data, id)
      .then((response) => form.updateCustomer(res, response, 200))
      .catch((err) => console.log(err));
  },
  getCustomerByID: (req, res) => {
    const id = req.params.id;
    getCustomerByID(id)
      .then((id1) => form.getCustomerByID(res, id1, 200))
      .catch((error) => console.log(error));
  },
};
