const router = require('express').Router();


const {registerCustomer,login,getCustomer,updateCustomer,getCustomerByID} = require ('../Controllers/customer')

router.post('/register',registerCustomer)

router.post('/login',login)
router.get('/',getCustomer)
router.get('/:id',getCustomerByID)
router.patch('/edit/:id',updateCustomer)

module.exports = router