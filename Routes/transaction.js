const {getTransaction,postTransaction} = require ('../Controllers/transaction')
const express = require ('express');
const router = express.Router() // manggil router


router.get('/',getTransaction)
router.post('/',postTransaction)
module.exports = router