
const router = require('express').Router();


const {register,login,getVendor} = require ('../Controllers/vendor')

router.post('/register',register)

router.post('/login',login)
router.get('/allvendor',getVendor)

module.exports = router