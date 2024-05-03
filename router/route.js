const express=require('express');
const router=express.Router();
const upload=require('../middleware/uploadFile');
const controller=require('../controller/controller')

router.post('/profile',upload.single('file'),controller.profilePic);
router.post('/photos',upload.array('photos',2),controller.uploadPhotos);
router.post('/uploadDataAny',upload.any(),controller.uploadDataAny);
router.post('/uploadData',upload.fields([{name:'photos',maxCount:2},{name:'file',maxCount:1}]),controller.uploadData)
module.exports=router;