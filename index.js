const express=require('express');
const PORT=process.env.PORT||4000;
const app=express();

const router=require('./router/route');
app.use(express.json());
// app.use(cors());
app.use('/api/v1',router);
app.listen(PORT,()=>{
    console.log("Listening to PORT "+PORT)
})
module.exports=app;