const express = require ('express')

const Vendor= require('./vendor')

const vendorItem = require('./VendorItem')
const transaction = require('./transaction')
const article= require('./articles')
const customer= require('./customer')
const subTrans = require('./subscriptTransaction')
const driver = require('./driver')
const driverPhoto = require('./photo')

const Router = express.Router();

Router.use('/vendoritem', vendorItem)
Router.use('/vendor',Vendor)
Router.use('/transaction',transaction)
Router.use('/article',article)
Router.use('/customer',customer)
Router.use('/subtrans',subTrans)
Router.use('/driver',driver)
Router.use('/driverphoto',driverPhoto)



module.exports = Router // export Route