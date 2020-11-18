const mongoose  = require("mongoose");
const connectDB = async()=>{
    try{
       await mongoose.connect("mongodb+srv://vivek:12345@cluster0.vkfla.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"),{
           useNewUrlParser:true,
           useUnifiedTopology: true
       }
       console.log("MONGODB Connected");
    }
    catch(e){
     console.log(e);
    }
}
module.exports = connectDB;