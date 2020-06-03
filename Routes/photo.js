
const router = require('express').Router();


const {getDriverItemPhoto,postPhoto} = require ('../Controllers/photo')

router.get('/:id',getDriverItemPhoto)
router.post('/uploadphoto',postPhoto)


module.exports = router