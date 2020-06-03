
const router = require('express').Router();


const {registerDriver,login,getDriver,updateDriver,getDriverByID,getDriverStatus
    ,getDriverCar,getDriverEconomy,getDriverEconomyPlus
,getDriverBisnis,getDriverEksekutif,getDriverByProductClass} = require ('../Controllers/driver')

router.post('/register',registerDriver)
router.patch('/edit/:id',updateDriver)
router.get('/status',getDriverStatus)
router.get('/carDriver',getDriverCar)
router.get('/:id',getDriverByID)
router.post('/login',login)
router.get('/',getDriver)
// router.get('/productClass/economy',getDriverEconomy)
// router.get('/productClass/economyplus',getDriverEconomyPlus)
// router.get('/productClass/eksekutif',getDriverEksekutif)
// router.get('/productClass/bisnis',getDriverBisnis)
router.get('/product/:productClass',getDriverByProductClass)


module.exports = router