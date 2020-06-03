const {registerDriver,getDriverbyEmail,getDriver,updateDriver,
    getDriverByID,getDriverStatus,getDriverCar,getDriverEconomy,getDriverEconomyPlus
,getDriverEksekutif,getDriverBisnis,
getDriverByProductClass} = require ('../Models/driver')

const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database
const fs = require('fs')
const form = require("../Helpers/resForm");
const {genSaltSync,hashSync,compareSync}= require('bcrypt')
const mv = require("mv");
const {sign} = require ('jsonwebtoken')
module.exports = {
    

        registerDriver : (req,res)=>{
           const body = req.body
           const salt = genSaltSync(10)
           body.password = hashSync(body.password,salt)
           body.online_status='aktif'
           body.status='aktif'
           body.accountStatus='unverified'
     
           getDriverbyEmail(email, (error, results) => {
            if (results) {
              return res.json({
                message: "Email already taken , please use with different email",
              });
            }
      
            registerDriver(body, (error, results) => {
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

    getDriver:(req,res)=>{
        getDriver((error,results)=>{
            if(error){
                console.log(error)
                return;
            }
        return res.json({
            success:1,
            data:results
        })
        })
    },
    getDriverStatus:(req,res)=>{
        getDriverStatus((error,results)=>{
            if(error){
                console.log(error)
                return;
            }
        return res.json({
            success:1,
            data:results
        })
        })
    },
    getDriverCar:(req,res)=>{
        getDriverCar((error,results)=>{
            if(error){
                console.log(error)
                return;
            }
        return res.json({
            success:1,
            data:results
        })
        })
    },
    login :(req,res)=>{
        const email = req.body.email
        getDriverbyEmail(email,(error,results)=>{
            if(error){
               return console.log(error)
            }
            if(!results){
               return res.json({
                    succes: 0,
                    message:"Data Not Found, Please Register"
                })
            }
            console.log(results)
            const result = compareSync(req.body.password, results.password)
            console.log("req password dan hash",req.body.password, results.password)
            if (result){
                results.password = undefined;
                const jsontoken = sign({result:results},process.env.SECRET_KEY,{
                    expiresIn :'24h'
                });
                return res.json({
                    succes:1,
                    message:'login succesfully',
                    token : jsontoken
                })
            }else{
                return res.json({
                    success:0,
                    message:'invalid email or password'
                })
            }
        })
    },
   
    deleteDriver:(req,res)=>{
        const id = req.params.id;
        deleteUser(id,(error,results)=>{
            if(error){
                console.log(error)
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : 'record not found'
                })
            }
            return res.json({
                succes:1,
                message:"deleted succesfully"
            })
        })
    },
    updateDriver:(req,res) => {
        const id = req.params.id;
        const data = req.body;
        // const salt = genSaltSync(10)
        // data.password = hashSync(data.password,salt)
        updateDriver(data,id)
        .then(response => form.updateDriver (res, response,200))
        .catch (err => console.log(err));
    },
       getDriverByID: (req, res) => {
        const id = req.params.id;
       getDriverByID(id)
          .then(id1 => form.getDriverByID(res, id1, 200))
          .catch(error => console.log(error));
      },
    //   getDriverEconomy:(req,res) => {
        
    //     getDriverEconomy()
    //     .then(response => form.getDriverEconomy (res, response,200))
    //     .catch (err => console.log(err));
    // },
    // getDriverEconomyPlus:(req,res) => {
        
    //     getDriverEconomyPlus()
    //     .then(response => form.getDriverEconomyPlus (res, response,200))
    //     .catch (err => console.log(err));
    // },
    // getDriverEksekutif:(req,res) => {
        
    //     getDriverEksekutif()
    //     .then(response => form.getDriverEksekutif (res, response,200))
    //     .catch (err => console.log(err));
    // },
    // getDriverBisnis:(req,res) => {
        
    //     getDriverBisnis()
    //     .then(response => form.getDriverBisnis (res, response,200))
    //     .catch (err => console.log(err));
    // },
    getDriverByProductClass:(req,res) => {
        const productClass = req.params.productClass;
        // const data = req.body;
        // const salt = genSaltSync(10)
        // data.password = hashSync(data.password,salt)
        getDriverByProductClass(productClass)
        .then(response => form.getDriverByProductClass (res, response,200))
        .catch (err => console.log(err));
    },
}
