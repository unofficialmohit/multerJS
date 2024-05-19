const {v2 : cloudinary}=require('cloudinary');
          
cloudinary.config({ 
  cloud_name: 'dfxcveahw', 
  api_key: '326252244196275', 
  api_secret: 'v32smP-WhgDU9SLIcU6j9EICD14' 
});

const profilePic=(req,res)=>{
// console.log(file.path)
if(!req.file) 
{
return res.status(400).send({message:"Image is require"});
}
const path=req.file.path;
console.log("path : ----" , path);
// const b64 = Buffer.from(req.file.buffer).toString("base64"); // we get buffer property only if we upload on memory storage
// let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    // cloudinary.uploader.upload(path)
    // .then((result)=>{
    //     console.log("file uploaded successfully");
    //     return res.status(200).send({file:result})
    // })
    // .catch((error)=>{
    //     console.log("ERROR");
    // })
    cloudinary.uploader.upload_stream({}, (error, result) => {
        if (error) {
          console.log("ERROR", error);
          return res.status(500).send({ message: "Error uploading image" });
        }
    
        console.log("file uploaded successfully", result);
        return res.status(200).send({ file: result });
      }).end(req.file.buffer);
}
const uploadPhotos=async (req,res)=>{
    const photos=req.files;
    const imageUri=[];
    for(let key of photos)
    {
        const image=await cloudinary.uploader.upload(key.path);
        imageUri.push(image);
            // .then((result)=>{
            //     console.log("file uploaded successfully");
            //     imageUri.push(result);
            //     // return res.send({file:result})
            // })
            // .catch((error)=>{
            //     console.log("ERROR");
            // })  
    }
    return res.status(200).send({files:imageUri})
}
const uploadData=async (req,res)=>{
    const photos=req.files.photos;
    const profile=req.files.file;
    const imageUri=[];
    let temp=[]
    for(let key of photos)
        {
            const image = await cloudinary.uploader.upload(key.path);
            temp.push(image);
        }
        imageUri.push({photos:temp});
        temp=[];
    for(key of profile)
    {
        const image=await cloudinary.uploader.upload(key.path);
        temp.push(image);
    }
    imageUri.push({file:temp})
    return res.status(200).send(imageUri)
}

const uploadDataAny=async(req,res)=>{
    const imageUri=[];
    const data=req.files;
    for(let key of data)
    {
        const image=await cloudinary.uploader.upload(key.path);
        imageUri.push(image);
    }
    return res.status(200).send(imageUri);
}
module.exports={
    profilePic,
    uploadPhotos,
    uploadData,
    uploadDataAny
}