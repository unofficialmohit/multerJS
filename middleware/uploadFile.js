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
const upload=multer({ storage:storage });
// const upload=multer({storage:multerStorage});
// const upload=multer();


module.exports=upload;