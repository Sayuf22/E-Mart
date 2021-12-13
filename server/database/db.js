import mongoose from 'mongoose';


const Connection = async(username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@xlo.irlhu.mongodb.net/XLO?retryWrites=true&w=majority`;
    try {
         await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
         console.log("DataBase connected Successfull");
    } catch (error) {
        console.log('Error: ',error.message);
    }
     
 }
 export default Connection;
 
