const multer=require('multer');

const multerStorage=multer.memoryStorage();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + file.originalname)
    }
  })
  
// const upload=multer({ dest: 'uploads/' });
// const upload=multer({ storage:storage });
// const upload=multer({storage:multerStorage});
// const upload = multer({ dest: '/tmp/' });
// const upload = multer({
//   dest: '/tmp/',
//   limits: {
//     fileSize: 10000000 // Limit the file size to 10 MB
//   }
// });
const upload = multer({
  limits: {
    fileSize: 10000000 // Limit the file size to 10 MB
  }
});
// const upload=multer();


module.exports=upload;